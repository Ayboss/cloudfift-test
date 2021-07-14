import React from 'react'
import PersonInfo from './PersonInfo'
import MajorPerson from './MajorPerson';
import person1 from '../assets/person1.svg';
import person2 from '../assets/person2.svg';
import person3 from '../assets/person3.svg';
import person4 from '../assets/person4.svg';
import person5 from '../assets/person5.svg';
import person6 from '../assets/person6.svg';
import person7 from '../assets/person7.svg';
import person8 from '../assets/person8.svg';
import person9 from '../assets/person9.svg';
import person10 from '../assets/person10.svg';
import person11 from '../assets/person11.svg';
import person12 from '../assets/person12.svg';

const peopleObj = [
    {
        image: person1,
        name: "Joseph Ike",
        location:"In Ikeja",
        role: "Customer",
        text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
    },
    {
        image: person2,
        name: "Adetola Fashina",
        location:"Ibadan",
        role: "Customer",
        text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser \n unt ut voluptate aute id deserunt nisi.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
        image: person3,
        name: "Emmanuel Fayemi",
        location:"In Akoka",
        role: "Customer",
        text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
    },
    {
        image: person4,
        name: "Chisom Obilor",
        location:"In Magodo",
        role: "Vendor",
        text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
    },
    {
        image: person5,
        name: "Adunola Adeyemi",
        location:"Iwo Road",
        role: "Vendor",
        text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser \n unt ut voluptate aute id deserunt nisi.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
        image: person6,
        name: "Chidi Okeke",
        location:"In Shomolu",
        role: "Vendor",
        text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
    },
]
const peopleObj2 = [
    {
        image: person7,
        name: "Temi Obadofin",
        role: "Vendor",
        text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
    },
    {
        image: person8,
        name: "Promise Ejiofor",
        role: "Vendor",
        text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser \n unt ut voluptate aute id deserunt nisi.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
        image: person9,
        name: "Feyisola Arinola",
        role: "Vendor",
        text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
    },
    {
        image: person10,
        name: "Karen Ibeh",
        role: "Vendor",
        text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
    },
    {
        image: person11,
        name: "Oluchi Uzo",
        role: "Vendor",
        text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser \n unt ut voluptate aute id deserunt nisi.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
        image: person12,
        name: "Amos okafor",
        role: "Vendor",
        text: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
    },
]
function MainSection() {
    return (
      <main className="main">
          <section className="main__grid">
              {
              peopleObj.map(peep=><PersonInfo key={peep.name}
              image={peep.image} 
              name={peep.name} 
              location={peep.location} 
              role={peep.role} 
              text={peep.text} />)
              }
          </section>
          <MajorPerson />
          <section className="main__grid">
              {
              peopleObj2.map(peep=><PersonInfo key={peep.name}
              image={peep.image} 
              name={peep.name} 
              location={peep.location} 
              role={peep.role} 
              text={peep.text} />)
              }
          </section>
      </main>
    )
}

export default MainSection
