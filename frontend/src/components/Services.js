import React from 'react'
import Cardio from "../assets/cardiologist.jpg"
import Neuro from "../assets/neurologist.jpg"
import Gyno from "../assets/gynecologist.jpg"
import Gastro from "../assets/gastroenterologist.jpg"
import Pshy from "../assets/psychiatrist.jpg"
import Derma from "../assets/dermatologist.jpg"

export default function Services() {
    const cards = [
        {
          title: 'Cardiologist',
          description: 'Specializes in the diagnosis and treatment of heart-related conditions and diseases.',
          imageUrl: Cardio,
        },
        {
          title: 'Neurologist',
          description: 'Specializes in the diagnosis and treatment of disorders affecting the nervous system.',
          imageUrl: Neuro,
        },
        {
          title: 'Gynecologist',
          description: ' Provides medical care related to pregnancy, childbirth, and women reproductive health.',
          imageUrl: Gyno,
        },
        {
            title: 'Gastroenterologist',
            description: 'Deals with disorders and diseases of the digestive system, including the esophagus.',
            imageUrl: Gastro,
          },
          {
            title: 'Dermatologist',
            description: 'Specializes in the diagnosis and treatment of conditions related to the skin.',
            imageUrl: Derma,
          },
          {
            title: 'Psychiatrist',
            description: '  Deals with the diagnosis and treatment of mental health disorders, including depression.',
            imageUrl: Pshy,
          },
      ];
  return (
    <>
    <section className="py-10">
        <h1 className="text-4xl text-[#145374] font-sans from-neutral-500 text-center">OUR SERVICES</h1>
        <div className="flex justify-center">
        <div className="w-64 h-px my-8 bg-[#93BFCF]"></div>
        </div>
        <div className="container mx-auto px-10 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">
        {cards.map((card, index) => (
          <div
            key={index}
            className="border-2 relative rounded-lg overflow-hidden transition-transform duration-200 transform hover:-translate-y-3 hover:shadow-2xl"
          >
            <div className="h-48 ">
              <img
                className="w-full h-full object-cover"
                src={card.imageUrl}
                alt={card.title}
              />
            </div>
            <div className="bg-[#E8E8E8] p-4">
              <h3 className="text-[#145374] text-xl font-bold text-center">{card.title}</h3>
              <p className="text-[#5588A3]">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
        </div>
        </section>
        
      </>
  )
}
