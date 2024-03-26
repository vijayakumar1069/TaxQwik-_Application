const nodemailer = require("nodemailer");
const USERSCHEMA = require("../Schema/user.Schema.js");

const userController = async (req, res) => {
  const { formData, returncount } = req.body;
  console.log(returncount);
  if (!formData || !returncount) {
    return res.status(400).json({
      message: "Please fill all the fields",
    });
  }

  try {
    let t = 0;
    let newArray = [];
    let v = returncount.map((data, index) => {
      t += Number(data.total);
      let newObj = {};
      for (const key in data) {
        if (data[key] === true) {
          newObj[key] = data[key];
        }
      }
      newArray.push({ ...newObj, total: data.total });
    });
    console.log(newArray);

    // console.log(trueKeysArray);

    const newuser = new USERSCHEMA({
      name: formData.name,
      email: formData.email,
      number: formData.number,
      taxforms: newArray,
      Total: Number(t + t * 0.13).toFixed(2),
    });
    const result = await newuser.save();

    // Send email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "vijay.r20799@gmail.com",
        pass: "tyun uagf iqbk lqpl",
      },
    });
    const generateTableHTML = (formData, returnCount) => {
      let grand = 0;
      let html = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background-color: #f0f0f0; padding: 20px; border-radius: 8px;">
                  <h1 style="text-align: center; color: #333;">${
                    formData.name
                  }</h1>
                  <p style="text-align: center; color: #666;">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nihil voluptate ipsa quidem eos voluptates voluptatum earum tempore rerum totam asperiores eum non dolorum vitae nesciunt dicta eligendi libero esse nam distinctio, exercitationem eaque doloremque magnam. Ratione architecto beatae necessitatibus ipsam impedit hic, distinctio odio eius sint nam itaque quaerat molestias laboriosam ipsa odit quam exercitationem fugit corrupti vel temporibus! Magnam autem architecto eligendi nihil excepturi consequatur deleniti ex, numquam rerum sint a qui officiis ut odio. Aliquam, quis voluptatem reiciendis delectus commodi provident mollitia ab cum asperiores sit dicta iure libero necessitatibus numquam ex voluptates quod est, ut voluptas.
                  </p>
              </div>
              <div style="background-color: #fff; padding: 20px; margin-top: 20px; border: 1px solid #ccc; border-radius: 8px;">
                  <h2 style="text-align: center; color: #333; margin-bottom: 20px;">Customer Details</h2>
                  <div style="text-align: left; margin-bottom: 20px;">
                      <p><strong>Name:</strong> ${formData.name}</p>
                      <p><strong>Email:</strong> ${formData.email}</p>
                      <p><strong>Phone:</strong> ${formData.number}</p>
                      <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
                  </div>
              </div>
              <div style="background-color: #f0f0f0; padding: 20px; margin-top: 20px; border-radius: 8px;">
                  <h2 style="text-align: center; color: #333; margin-bottom: 20px;">Tax Details</h2>
  `;

      returnCount.forEach((data, index) => {
        const trueData = Object.entries(data).filter(
          ([key, value]) => value === true
        );
        const total = Object.values(data).reduce(
          (acc, curr) => (typeof curr === "number" ? acc + curr : acc),
          0
        );
        grand += total;
        html += `
              <div style="background-color: #fff; padding: 20px; margin-top: 20px; border: 1px solid #ccc; border-radius: 8px;">
                  <h3 style="color: #333; margin-bottom: 10px;">Tax-${
                    index + 1
                  }</h3>
                  <ul style="list-style-type: none; padding: 0; margin: 0;">
          `;
        trueData.forEach(([key, value]) => {
          html += `
                  <li style="color: #000000; margin-bottom: 5px;"><strong>${key}</strong> </li>
              `;
        });
        html += `
                  </ul>
                  <div style="text-align: right; margin-top: 1px;">
                      <strong> $ ${total}</strong> 
                  </div>
              </div>
          `;
      });

      html += `
      <div style="background-color: #fff; padding: 20px; margin-top: 20px; border: 1px solid #ccc; border-radius: 8px;">
          <div style="margin-bottom: 10px;">
              <h3 style="display: inline-block; color: #333;">Sub Total :</h3>
              <h3 style="color: #31363F; float: right;">$ ${grand}</h3>
          </div>
          <div style="margin-bottom: 10px;">
              <h3 style="display: inline-block; color: #333;">HST (13%) :</h3>
              <h3 style="color: #31363F; float: right;">$ ${(
                grand * 0.13
              ).toFixed(2)}</h3>
          </div>
          <hr style="border-top: 1px solid #ccc; margin: 20px 0;">
          <div>
              <h2 style="display: inline-block; color: #333;">Grand Total :</h2>
              <h2 style="color: #124076; float: right;">$ ${(
                grand + Number(grand * 0.13)
              ).toFixed(2)}</h2>
          </div>
      </div>
  </div>
  `;

      return html;
    };

    const tableHTML = generateTableHTML(formData, returncount);

    const mailOptions = {
      from: process.env.GMAIL,
      to: "vijay.r20799@gmail.com",
      cc: "vi@gmail.com",
      subject: "Data for customer",
      html: `
                <p style="font-size: 16px;">Please find below the data for the customer:</p>
                ${tableHTML}
            `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error occurred:", error);
        return res
          .status(500)
          .json({ error: "Error occurred while sending email" });
      } else {
        console.log("Email sent:", info.response);
        return res
          .status(200)
          .json({ success: "Our Team Member shall Contact You soon" });
      }
    });
  } catch (error) {
    console.error("Error occurred:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = userController;
