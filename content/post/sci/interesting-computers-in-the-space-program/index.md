---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Interesting Computers in the Space Program"
subtitle: "A look at a few of the computer systems used in the U.S. Space Program"
summary: "NASA has an interesting history with computing technology, especially building computers to last a long time and/or keep humans safe in their travels."
authors: ["djsweeney"]
tags: ["NASA", "space", "voyager", "apollo", "moon", "shuttle"]
categories: ["Science","Technology"]
date: 2019-10-10T14:17:54-04:00
lastmod: 2019-10-10T14:17:54-04:00
featured: true
draft: true

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: "Voyager - Image courtesy of JPL"
  focal_point: "Smart"
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

From an early age I've had a fascination with science in general, but especially astronomy and space exploration. Around the time I started school, like many young boys of the time *(and some today, I suspect)* I was enamored with dinosaurs. But the space program really go my attention. I was born two years before the moon landings, so I don't remember the first walk on the moon _(though I'm sure I **saw** it --- I was just too young to remember it),_ but during the early to mid-1970's I soaked up everything I could about NASA, Skylab, the Viking Mars Mission and news about the new Space Shuttle.

<!--
> I've never lost my love for space, even as the promise of the Space Shuttle's re-usability was replaced by the stark reality of just how complicated *(and dangerous)* such a vehicle could be. I remember exactly where I was and what I was doing when I found out about the Challenger explosion in 1986 *(in a college bookstore --- I heard the first news on the radio playing in the store),* and the Columbia re-entry failure in 2003 *(my wife woke me to tell me Columbia was burning up on re-entry --- I wasn't sure I heard her correctly).*
-->

By the late 1970's, I started to pay attention to developments in the fledgling personal computer business. By the early 1980's, I'd begun **using** computers at school, first a Radio Shack TRS-80 Model 1 *(often referred to decades later as the 'Trash 80'),* then the Apple II computers *(in a typing class --- there was __no__ computer class in a small-town high school like mine).* Although I remember reading stories about the redundant computers on the Space Shuttle, I didn't really pay much attention to the importance of computers to the space program.

It should come as no surprise to learn that computers are a critical part of space exploration. By the mid-1960's, as NASA pushed forward with the Apollo Program, computer technology had become miniaturized enough to allow specialized computers to fit into the Command Module and Lunar Module. Today, it is common for people to denigrate these computers as 'less powerful than a digital watch' and be amazed that we got to the moon on 'computers less powerful than a pocket calculator'.

The reality is that the computers used to get to the moon were **far** from primitive. In many ways, these computers were designed with a level of reliability and redundancy that are **still** the envy of mainstream computer hardware users. As fast and powerful as modern computers are, they would never survive in space. Even today, the CPU's used in spacecraft are **not** cutting-edge chips, but rather well-tested, radiation-hardened chips with decades of reliable operation.

This is not an article about the deep engineering details of computers in the space program. I'll be looking at the computers used on three different programs and providing an overview of some of the things I found interesting about each system. For more details about each computer system, I'll provide links to some interesting articles on the topic.

## The Apollo Guidance Computers

The Apollo Guidance Computer (AGS) was **not** a general-purpose computer like a personal computer. It was essentially an embedded system designed at MIT specifically for the Apollo Program. Moon landing missions had two AGS computers: one in the Command Module and one in the Lunar Module. The technical details of the AGS are more than I'm willing to cover *(or understand --- I'm not an engineer).* But essentially, it had a very limited about of RAM, with most of it's memory using ROM (Read Only Memory) that used rope-memory *(hand wired, iron-core memory modules).* The computers were designed so their core memory could withstand just about anything --- short of exploding, the computer would always be able to access its programs.

The AGS was designed in an era when the idea of multi-tasking on a computer was very limited. There were no multi-core processors or hyper-threading CPUs *(well, there __might__ have been something somewhere, but Cray Supercomputers were still years in the future).* The AGS relied on time-slicing, operating in a loop that cycled through it's programs and carried out its instructions. The instructions in the hard-coded programs were prioritized so the most important inputs would be processed and handled, while less-important things would get delayed *(or dropped entirely if the AGS was too busy).*

## The Voyager Space Probe Computers

Text...

## The Space Shuttle Computers

Text...

