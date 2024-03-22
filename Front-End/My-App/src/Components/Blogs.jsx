import React from "react";
import { motion } from "framer-motion";
import { FaAngleRight } from "react-icons/fa";

const Blogs = () => {
  const blog = [
    {
      image:
        "https://t3.ftcdn.net/jpg/04/29/32/58/360_F_429325800_ebRpU9D1PLTBC7yEzy3eg4CKtlkgced6.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis, sem laoreet rhoncus cursus, lorem lectus gravida dui, condimentum blandit diam diam sit amet arcu. Fusce elementum ante eget fermentum molestie. Nulla gravida eros erat, quis fermentum nibh vestibulum non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur neque nisl, maximus non eleifend a, malesuada tempor metus. Morbi id leo non diam finibus tristique. Donec rhoncus dapibus diam, at accumsan risus finibus quis. Mauris non enim consequat, ullamcorper lorem elementum, congue urna.",
      redirect: "https://daisyui.com/components/footer/",
    },
    {
      image:
        "https://leadershipthroughdata.com/wp-content/uploads/20230718-Blog-Jacqueline-Stockwell-Where-to-start-with-auditing-in-Microsoft-365.png",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis, sem laoreet rhoncus cursus, lorem lectus gravida dui, condimentum blandit diam diam sit amet arcu. Fusce elementum ante eget fermentum molestie. Nulla gravida eros erat, quis fermentum nibh vestibulum non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur neque nisl, maximus non eleifend a, malesuada tempor metus. Morbi id leo non diam finibus tristique. Donec rhoncus dapibus diam, at accumsan risus finibus quis. Mauris non enim consequat, ullamcorper lorem elementum, congue urna.",
      redirect: "https://copper-hill-inc.com/audit-support/",
    },
  ];

  return (
    <div className="flex justify-center mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {blog.map((data, index) => (
          <motion.div
            key={index}
            className="max-w-sm border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={data.image}
              alt="Blog Thumbnail"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-800 text-base">{data.content}</p>
              <div className="flex items-center justify-between mt-4">
                <a
                  href={data.redirect}
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  Read more
                </a>
                <FaAngleRight className="text-xs" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
