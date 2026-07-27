"use client"
import React, { useState, useEffect } from 'react'
import CountUp from "react-countup"
interface stats{
  num: number;
  text:string
}

const staticStats = [
  {
    num:3,
    text:"Months of Experience"
  },
  {
    num:6,
    text:"Projects Completed"
  },
  {
    num:9,
    text:"Technologies Mastered "
  },
]

const Stats = () => {
  const [commitCount, setCommitCount] = useState(159)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCommitCount = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/arham-ali1323/Arham-pro-portfolio/stats/contributors')
        if (response.ok) {
          const data = await response.json()
          if (Array.isArray(data) && data.length > 0) {
            const totalCommits = data.reduce((sum: number, contributor: any) => 
              sum + (contributor.total || 0), 0)
            setCommitCount(totalCommits)
          }
        }
      } catch (error) {
        console.error('Failed to fetch commit count:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCommitCount()
  }, [])

  const stat = [
    ...staticStats,
    {
      num: commitCount,
      text:"Code Commits"
    },
  ]
  return (
    <section>
      <div className='container mx-auto'>
        <div className='flex flex-wrap gap-6 mt-8  max-w-[80vm] mx-auto xl:mx-w-none'>
          {
            stat.map((stats:stats , index)=>{
              return(
                <div className='flex-1 flex gap-6 items-center justify-center xl:justify-start'
                 key={index}>
                  <CountUp
                  end ={stats.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl  text-orange-400 font-bold"/>
                  <p className={`${stats.text.length < 10 ? "max-w-[60px] ": "max-w-[100px] font-bold  text-xl"}`}>
                    {stats.text}
                  </p>

                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  
  
  )
}
export default Stats