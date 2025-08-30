import React from "react";
import Image from "next/image"; 

const ProjectsPage = () => {
  return (
    <div className="container flex flex-col min-h-screen px-6 lg:px-4 mx-auto pt-16 pb-10 sm:pb-0 sm:pt-12 max-w-5xl">

      <div className="relative flex items-center justify-center mb-12 py-16">
        <h1 className="absolute text-4xl text-white font-bold bg-black rounded-full px-8 py-4 z-30">My Projects</h1>
      </div>
      <div className="flex flex-col">

        {/* --- Seção do Projeto Transportadora --- */}
        <section className="flex flex-col lg:flex-row bg-black overflow-hidden shadow-lg mb-12 border border-white rounded-xl">
          <div className="relative w-full lg:w-1/2 h-64 lg:h-auto bg-black flex items-center justify-center">
            <img
              src="/images/gifTi3.gif" 
              alt="Sistema para Transportadora"
              className="absolute inset-0 w-full h-full object-contain rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none"
            />
          </div>
          <div className="p-8 w-full lg:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">
                Sistema para Transportadora
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Este projeto apresenta um sistema completo para uma transportadora,
                abrangendo diversos cadastros e um dashboard detalhado. Oferece um
                controle preciso para facilitar o dia a dia dos stakeholders da
                empresa, seguindo as melhores práticas de mercado.
              </p>
              <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2">
                <li>
                  Sistema de cadastros completo para clientes, veículos e
                  motoristas.
                </li>
                <li>
                  Dashboard interativo com métricas e indicadores chave de
                  performance.
                </li>
                <li>
                  Controle preciso de rotas, entregas e status de frete em tempo
                  real.
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-3 mt-6">
              <span
                className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-base rounded-md border border-yellow-500
                         transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer"
              >
                React
              </span>
              <span
                className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-base rounded-md border border-yellow-500
                         transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer"
              >
                Spring Boot
              </span>
              <span
                className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-base rounded-md border border-yellow-500
                         transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer"
              >
                MySQL
              </span>
            </div>
          </div>
        </section>
        
     
        <section className="flex flex-col lg:flex-row bg-black overflow-hidden shadow-lg mb-12 border border-white rounded-xl">
          
          <div className="relative w-full lg:w-1/2 h-64 lg:h-auto bg-black flex items-center justify-center">
            <img
              src="/images/gifTi2.gif"
              alt="Restaurant Management System"
             
              className="absolute inset-0 w-full h-full object-contain rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none"
            />
          </div>
          <div className="p-8 w-full lg:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">
                RMS (Restaurant Management System)
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                O objetivo do RMS é oferecer uma solução tecnológica integrada para otimizar as operações e aumentar a eficiência em restaurantes, abordando desafios como falhas de comunicação, controle de estoque e gestão financeira.
              </p>
              <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2">
                <li>Gestão de estoque em tempo real para reduzir desperdícios.</li>
                <li>Comunicação integrada entre cozinha, salão e gerência.</li>
                <li>Automação de processos financeiros e relatórios.</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-3 mt-6">
               <span
                className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-base rounded-md border border-yellow-500
                         transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer"
              >
                Java
              </span>
              <span
                className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-base rounded-md border border-yellow-500
                         transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer"
              >
                Angular
              </span>
              <span
                className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-base rounded-md border border-yellow-500
                         transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer"
              >
                PostgreSQL
              </span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ProjectsPage;

