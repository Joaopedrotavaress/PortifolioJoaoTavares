import React from "react";
import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiDotnet,
  SiMysql,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div className="flex flex-wrap gap-6 mt-6">
      <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800">
        <SiDotnet className="text-2xl text-purple-600" />
        <span className="text-gray-800 dark:text-gray-300 text-sm">.NET</span>
      </div>

      <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800">
        <FaJava className="text-2xl text-red-500" />
        <span className="text-gray-800 dark:text-gray-300 text-sm">Java</span>
      </div>

      <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800">
        <SiSpringboot className="text-2xl text-green-600" />
        <span className="text-gray-800 dark:text-gray-300 text-sm">
          Spring Boot
        </span>
      </div>

      <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800">
        <FaReact className="text-2xl text-blue-600" />
        <span className="text-gray-800 dark:text-gray-300 text-sm">
          React.js
        </span>
      </div>

      <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800">
        <FaJs className="text-2xl text-yellow-500" />
        <span className="text-gray-800 dark:text-gray-300 text-sm">
          JavaScript
        </span>
      </div>

      <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800">
        <SiMysql className="text-2xl text-blue-700" />
        <span className="text-gray-800 dark:text-gray-300 text-sm">MySQL</span>
      </div>

      <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800">
        <FaHtml5 className="text-2xl text-orange-600" />
        <span className="text-gray-800 dark:text-gray-300 text-sm">HTML</span>
      </div>

      <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800">
        <FaCss3Alt className="text-2xl text-blue-700" />
        <span className="text-gray-800 dark:text-gray-300 text-sm">CSS</span>
      </div>

      <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md dark:bg-gray-800">
        <RiTailwindCssFill className="text-2xl text-blue-700" />
        <span className="text-gray-800 dark:text-gray-300 text-sm">Tailwind</span>
      </div>

    </div>
  );
};

export default Skills;