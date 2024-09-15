import React from 'react'
import Link from 'next/link'

const SupplementalInstruction = () => {
  return (
    <div className='w-screen md:h-screen bg-atomwhite'>
        <div className='h-full w-full p-4 md:p-10 lg:p-20 flex flex-col gap-8 md:gap-10'>
            <h1 className='text-4xl md:text-6xl text-atomgreyb'>Hello and Welcome to Math 215 SI Sessions!</h1>
            <p className='text-2xl md:text-4xl text-atomgreyb'>My name is Marco and I will be your SI Leader for this course.</p>
            <div className = "flex flex-col gap-4">
            <p className='text-lg text-atomgreyb'>The sessions will be held on: Sunday from 1:00 pm to 2:30 pm</p>
            <p className='text-lg text-atomgreyb'>The sessions will be held at: 1372 East Hall - Central Campus</p>
            </div>
            <div className="flex flex-col gap-4">
            <div className="collapse bg-atomwhite text-atomgreyb border-2">
  <input type="radio" name="my-accordion-1" defaultChecked />
  <div className="collapse-title text-xl font-medium">Session Content</div>
  <div className="flex flex-col collapse-content">
    <Link href = "https://drive.google.com/file/d/1RQVWHWlQvcOgynPZh8C-4tRGvWJiLk-Q/view?usp=drive_link" className = "hover:text-atomblack">Week 1 P-SET</Link>
    <Link href = "https://drive.google.com/file/d/16BSWou6FRsFD6-O4T_DlhQo-SRADSn_O/view?usp=drive_link" className = "hover:text-atomblack">Week 1 SOLUTIONS</Link>
    <Link href = "https://drive.google.com/file/d/1x_yasExT40AdqHkMmPE-xhIl3fkJK94N/view?usp=sharing" className = "hover:text-atomblack">Week 2 P-SET</Link>
    <Link href = "https://drive.google.com/file/d/1L2MwQf5972eToJF5LNJL8FjQbxA8Kfxi/view?usp=sharing" className = "hover:text-atomblack">Week 2 SOLUTIONS</Link>
    <Link href = "https://drive.google.com/drive/folders/12Pt0F6Cl5k8LezmfKdS41UT9HTURTZ5k?usp=sharing" className = "hover:text-atomblack">Google Drive</Link>
  </div>
</div>
<div className="collapse bg-atomwhite text-atomgreyb border-2">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium">What are SI Sessions?</div>
  <div className="collapse-content">
    <p>
SI sessions are supplemental instruction sessions in place for you to get familiar and practice with exam questions. The weekly agenda will consist of going over content learned and applying the concepts to exam questions in a collaborative setting. Attending these sessions is a great way to practice and ask questions in order to succeed in the class. 

Please feel free to give me any feedback on these sessions! 
</p>
  </div>
</div>
<div className="collapse bg-atomwhite text-atomgreyb border-2">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium">Helpful Resources</div>
  <div className="flex flex-col collapse-content">
    <Link href = "https://math.arizona.edu/~serinh/teaching/math215.html" className = "hover:text-atomblack">Course Notes by Serin Hong</Link>
    <Link href = "https://www.khanacademy.org/math/multivariable-calculus" className = "hover:text-atomblack">Khan Academy</Link>
    <Link href = "https://tutorial.math.lamar.edu/classes/calciii/calciii.aspx " className = "hover:text-atomblack">Paul&apos;s Online Notes</Link>
    <Link href = "https://lsa.umich.edu/math/undergraduates/course-resources/math-lab.html" className = "hover:text-atomblack">Math Lab</Link>
    <Link href = "https://ecas.engin.umich.edu/elc/tutoring/" className = "hover:text-atomblack">Tutoring</Link>
    <Link href = "https://ecas.engin.umich.edu/elc-si-schedule/" className = "hover:text-atomblack">SI Schedule</Link>

  </div>
</div>
</div>
<Link href = "/" className = "text-atomgreyb hover:text-atomblack">Return to Home</Link>
        </div>
    </div>
  )
}

export default SupplementalInstruction