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

From an early age I've had a fascination with science in general, but especially astronomy and space exploration. Around the time I started school, like many young children of the time *(and some today, I suspect)* I was enamored with dinosaurs. But the space program really go my attention. I was born two years before the moon landings, so I don't remember the first walk on the moon _(though I'm sure I **saw** it --- I was just too young to remember it),_ but during the early to mid-1970's I soaked up everything I could about NASA, Skylab, the Viking Mars Mission and news about the new Space Shuttle.

By the late 1970's, I started to pay attention to developments in the fledgling personal computer business. By the early 1980's, I'd begun **using** computers at school, first a Radio Shack TRS-80 Model 1 *(often referred to decades later as the 'Trash 80'),* then the Apple II computers *(in a typing class --- at the time, there was __no__ computer class in a small-town high school like mine).* Although I remember reading stories about the redundant computers on the Space Shuttle, I didn't really pay much attention to the importance of computers to the space program.

It should come as no surprise to learn that computers are a critical part of space exploration. By the mid-1960's, as NASA pushed forward with the Apollo Program, computer technology had become miniaturized enough to allow specialized computers to fit into the Command Module and Lunar Module. Today, it is common for people to denigrate these computers as 'less powerful than a digital watch' and be amazed that we got to the moon on 'computers less powerful than a pocket calculator'.

The reality is that the computers used to get to the moon were **far** from primitive. In many ways, these computers were designed with a level of reliability and redundancy that are **still** the envy of mainstream computer hardware users. As fast and powerful as modern computers are, they would never survive in space. Even today, the CPU's used in spacecraft are **not** cutting-edge chips, but rather well-tested, radiation-hardened chips with decades of reliable operation.

This is **not** an article about the deep engineering details of computers in the space program. I'll be looking at the computers used on three different space programs and providing an overview of some of the things I found interesting about each system. For more details about each computer system, I'll provide links to some interesting articles on the topic.

## The Apollo Guidance Computers

The Apollo Guidance Computer (AGS) was **not** a general-purpose computer like a personal computer. It was essentially an embedded system designed at MIT specifically for the Apollo Program. Moon landing missions had two AGS computers: one in the Command Module and one in the Lunar Module. The engineering details of the AGS are more than I'll cover in this article. But essentially, it had a very limited about of volatile RAM (Random Access Memory), with most of it's memory using ROM (Read Only Memory) that used rope-memory *(hand wired, iron-core memory modules).* The computers were designed so their core memory could withstand just about anything --- short of exploding, the computer would always be able to access its programs and carry out the tasks assigned to it.

The AGS was designed in an era when the idea of multi-tasking on a computer was quite new and, where it was being done, it was on mainframes and large mini-computers. There were no multi-core processors or hyper-threading CPUs like we have today. The AGS relied on a type of pre-emptive multi-tasking *(probably an over-simplification, but suitable for our purposes here)*, where the computer cycled through it's programs and carried out its instructions. The instructions in the hard-coded programs were prioritized so the most important inputs would be processed and handled, while less-important things would get delayed *(or dropped entirely if the AGS was too busy).* This was all handled by the 'Executive' program *(a kind of operating system for the AGS)* that took care of the timing and decision-making about which instructions would run and when. This read-time prioritization of instructions was key to the rest of the story that follows.

As Neil Armstrong and Buzz Aldrin began their descent in the lunar module, the AGS for the lunar module was dutifully carrying out its instructions, monitoring telemetry and updating the astronauts on the descent status. As the descent proceeded the AGS generated a&nbsp;'1202'&nbsp;alarm, indicating a problem that was, to the astronauts, unclear *(there were hundreds of alarm codes --- they wouldn't have memorized every type of alarm).* Back in Mission Control, it took about 20 seconds before someone recognized what was happening, determined it wouldn't jeopardize the landing attempt, and cleared the landing to continue.

It is important to remember that no one had ever done this before *(actually attempting to land on the moon).* Neil had simulated flying the lunar module using a contraption on Earth that was so unstable that even Neil had been forced to eject from the simulator on one occasion, resulting in a spectacular fireball and a narrow escape for Neil.

The lunar module had an abort system *(with its own, independent Abort Computer)* that could cut the ascent stage from the descent stage and push the astronauts back into lunar orbit to rejoin the command module. Aborting was extremely risky *(a __lot__ had to go just right for the abort to succeed)* but if something went horribly wrong during descent it would be a risk worth taking versus crashing into the lunar surface. As part of the abort procedure, the radar used for orbital rendezvous would be turned on and would track the ascent back to the command module. However, this rendezvous radar would not be needed during descent, so it was not meant to be active.

As a precaution, Buzz chose to enable the rendezvous radar system as they began the descent, just in case they were forced to abort. This way, the lunar module would already have a fix on the command module should something go wrong. Contrary to some popular reports, this was **not** a mistake by Buzz&nbsp;---&nbsp;his decision to enable the rendezvous radar was an established procedure. The problem occurred due to a documentation error in the sequencing of enabling the radar. Since Buzz *(and nearly everyone else)* was unaware of this documentation error, no one knew that turning on the radar would create a problem for the AGS.

Without delving into the minutia of the problem, suffice to say that Buzz activated the radar at just the wrong millisecond, resulting in two systems being slightly out-of-phase with each other, causing the AGS to become overloaded with extra interrupts that it couldn't resolve. The AGS, now running out of resources, started dropping lower-priority tasks *(like the data from the rendezvous radar)* and let everyone know it was doing this by showing the&nbsp;'1202'&nbsp;alarm. At this point the AGS carried out a procedure know as&nbsp;BAILOUT, storing all its current parameters and essentially restarting itself *(a relatively quick type of soft reboot)*, picking up exactly where it left off. 

At the time, no one knew the specifics of why the&nbsp;'1202'&nbsp;alarm *(and a similar&nbsp;'1201'&nbsp;alarm)* had occurred, but since these alarms were **not** indicating a complete system failure, the landing attempt could continue.

It is a testament not only to the engineering of the ASG hardware but also to the genius of the software design. The prioritization of tasks allowed the AGS to quickly and efficiently deal with an overload of data and continue the mission. Even today, general-purpose computers tend to slow to a crawl or just crash when overloaded with too much data at once. But the AGS set the stage for embedded computer designs that would be used and refined over the following decades, providing flight computers that would be used in military aircraft and even the Space Shuttle. 

> **Reference:**
> 
> - [No, a “checklist error” did not almost derail the first moon landing](https://arstechnica.com/science/2019/07/no-a-checklist-error-did-not-almost-derail-the-first-moon-landing/)<cite>&nbsp;&nbsp;--&nbsp;Lee&nbsp;Hutchinson - Ars Technica - 7/5/2019</cite>
> - [Apollo Guidance Computer](https://en.wikipedia.org/wiki/Apollo_Guidance_Computer)<cite>&nbsp;&nbsp;--&nbsp;Wikipedia</cite>
> - [The Apollo Guidance Computer: Hardware](https://history.nasa.gov/computers/Ch2-5.html)<cite>&nbsp;&nbsp;--&nbsp;NASA</cite>



## The Voyager Space Probe Computers

Text...

## The Space Shuttle Computers

Text...

