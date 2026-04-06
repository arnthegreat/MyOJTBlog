export interface BlogPost {
  id: number;
  title: string;
  date: string;
  preview: string;
  content: string;
  images?: string[]; // Array of Google Drive image URLs
}

export const posts: BlogPost[] = [
  {
    id: 1,
    title: "Week 1",
    date: "January 15, 2026",
    preview:
      "First day/week of my On-the-Job Training. Nervous but excited to learn and grow.",
    content: `During my first week of OJT, I was assigned to organize the Capstone 1 and Capstone 2 files. My main task was to separate the documents, group them according to year, and then sort them by department, specifically BSIT and BSCS. This process required careful attention because there were many files that needed to be arranged properly.

To make the documents easier to identify, I used sticky notes to label and categorize the arranged and completed capstone papers. This helped create a clearer system for locating files quickly. Throughout the week, I also encoded the important details of each capstone into Excel so that the records would be easier to track, search, and update when needed.

By the end of the week, the workspace became more organized and the documents were much easier to locate. The improved filing system made everything more structured and efficient. Overall, my first week of OJT was productive and a great learning experience, and I’m looking forward to continuing to help improve the organization of the records in the coming weeks.`,
    images: [
      "https://drive.google.com/uc?export=view&id=1mzjhuLSMJorvILRkycFbyJlW7CPEPbKC",
    ],
  },
  {
    id: 2,
    title: "Week 2",
    date: "January 22, 2026",
    preview:
      "We continued organizing capstone files, search for missing documents while completing our biometric registration.",
    content: `During my second week of OJT, we continued the work we started during the first week. Together with my OJT partner and teammate, Nicole Boroc, we kept organizing and managing the Capstone 1 and Capstone 2 documents. Because we already had a clear system from the previous week, the work became more manageable and we were able to complete our tasks more efficiently while staying organized.

One of the important things we did this week was register our biometrics for our daily time-in and time-out at ICTO (Building 1). This officially set up our attendance system for the duration of our OJT.

Aside from organizing the files, we also began gathering important papers and data from the Faculty area, where most of the thesis (capstone) documents are stored. Our task was to search for missing and incomplete papers related to the capstone records we were organizing. Our mentor instructed us to check the Faculty room because the important documents should be kept there.

However, despite carefully checking the files, we were still unable to locate some of the papers we needed. Our mentor said that they would figure out the next steps in the following days to address the missing documents.

Overall, it was a long and tiring week, but it was also enjoyable and rewarding. Working together made the tasks easier, and it felt good to see the progress we were making in organizing the capstone records.`,
  },
  {
    id: 3,
    title: "Week 3",
    date: "January 29, 2026",
    preview:
      "",
    content: `This week was all about diving deeper into the company's codebase. I spent most of my time reading through existing code, understanding the architecture, and learning how different components interact with each other.

**Key Learning Points:**

**Understanding Legacy Code**
Working with code written by other developers is a skill in itself. I learned to trace function calls, understand naming conventions, and use debugging tools to follow the flow of execution.

**Git and Collaboration**
I practiced creating branches, making commits with meaningful messages, and submitting pull requests for code review. My first PR was nerve-wracking, but the feedback I received was constructive and helped me improve.

**Code Reviews**
Participating in code reviews taught me to think critically about code quality, security, and maintainability. I learned that code reviews aren't about criticism – they're about collective improvement.

This week reinforced that being a developer is not just about writing code, but also about reading, understanding, and improving existing code.`,
  },
  {
    id: 4,
    title: "Week 4",
    date: "February 5, 2026",
    preview:
      "",
    content: `I was assigned my first real bug fix this week! A user reported an issue with form validation, and I was tasked with investigating and fixing it.

**The Process:**

**1. Reproduce the Bug**
First, I had to replicate the issue in my local environment. This taught me the importance of understanding user behavior and testing edge cases.

**2. Investigate the Root Cause**
Using browser dev tools and console logs, I traced the issue to an incorrect validation regex pattern.

**3. Implement the Fix**
After discussing with my mentor, I updated the validation logic and added additional test cases.

**4. Testing**
I learned to test not just the fix, but also to ensure it didn't break anything else.

**5. Documentation**
I documented the bug, the fix, and the reasoning behind my approach.

This experience taught me that debugging is a systematic process. Stay calm, gather information, form hypotheses, and test them methodically.`,
  },
  {
    id: 5,
    title: "Week 5",
    date: "February 12, 2026",
    preview:
      "",
    content: `This week, I actively participated in daily stand-ups, sprint planning, and retrospective meetings. Understanding agile methodologies in practice was eye-opening.

**What I Learned:**

**Daily Stand-ups**
Short, focused meetings where everyone shares what they did yesterday, what they'll do today, and any blockers. I learned to communicate concisely and effectively.

**Sprint Planning**
Watching the team break down large features into smaller, manageable tasks taught me about project estimation and planning.

**Retrospectives**
The team's openness in discussing what went well and what could improve created a culture of continuous improvement.

**Collaboration Tools**
I became proficient with tools like Jira for task tracking and Slack for team communication.

This week showed me that software development is a team sport. Communication, collaboration, and adaptability are just as important as technical skills.`,
  },
  {
    id: 6,
    title: "Week 6",
    date: "February 19, 2026",
    preview:
      "",
    content: `I was given the opportunity to implement a small feature end-to-end! My mentor guided me, but I had ownership of the entire process.

**The Feature:**
Adding a "Remember Me" functionality to the login page.

**My Approach:**

**1. Requirements Gathering**
I discussed the requirements with the product team to understand the expected behavior.

**2. Design**
I sketched out the UI changes and data flow, considering security implications.

**3. Implementation**
I wrote the frontend code, backend API updates, and database changes needed.

**4. Testing**
I created unit tests and performed manual testing across different browsers.

**5. Code Review and Deployment**
After addressing code review feedback, my feature was deployed to production!

Seeing something I built being used by real users was incredibly rewarding. This week boosted my confidence and showed me I can contribute meaningfully to real projects.`,
  },
  {
    id: 7,
    title: "Week 7",
    date: "February 26, 2026",
    preview:
      "",
    content: `This week focused on backend work, specifically database optimization. I learned that writing queries is one thing, but writing efficient queries is another.

**Key Lessons:**

**Understanding Indexes**
I learned how database indexes work and when to use them. Adding an index to a frequently queried column significantly improved response times.

**Query Optimization**
I practiced using EXPLAIN to analyze query execution plans and identify bottlenecks.

**N+1 Query Problem**
I discovered and fixed several N+1 query issues in the codebase using eager loading.

**Caching Strategies**
I was introduced to caching mechanisms to reduce database load for frequently accessed data.

This week deepened my understanding of backend development and the importance of performance optimization. Users expect fast applications, and efficient database queries are crucial to delivering that experience.`,
  },
  {
    id: 8,
    title: "Week 8",
    date: "March 5, 2026",
    preview:
      "",
    content: `Reaching the halfway point of my OJT, I took time to reflect on my journey so far and set goals for the remaining weeks.

**What I've Accomplished:**
- Successfully fixed multiple bugs
- Implemented features from start to finish
- Improved my understanding of the tech stack
- Developed better communication skills
- Learned to work effectively in a team

**Challenges I've Overcome:**
- Initial imposter syndrome
- Fear of asking questions
- Difficulty understanding legacy code
- Time management between OJT and academics

**Goals for Remaining Weeks:**
- Take on more complex features
- Improve code quality and best practices
- Learn more about system architecture
- Mentor newer interns if possible
- Document my learnings comprehensively

This reflection reminded me how much I've grown in just two months. I'm excited and motivated for what's ahead.`,
  },
  {
    id: 9,
    title: "Week 9",
    date: "March 12, 2026",
    preview:
      "",
    content: `This week shifted focus to frontend development. I worked on improving the user interface of an existing feature and learned about modern frontend best practices.

**Topics Covered:**

**Component Architecture**
I learned to break down UI into reusable components, making code more maintainable and scalable.

**State Management**
Understanding when to use local state vs. global state, and how to manage data flow efficiently.

**Responsive Design**
I practiced creating layouts that work seamlessly across desktop, tablet, and mobile devices.

**Accessibility**
I was introduced to web accessibility standards and learned to make applications usable for everyone.

**Performance**
I learned about lazy loading, code splitting, and optimizing bundle sizes for faster load times.

Working on the frontend reminded me that great software is not just about functionality – it's about creating delightful user experiences. Good UI/UX can make or break an application.`,
  },
  {
    id: 10,
    title: "Week 10",
    date: "March 19, 2026",
    preview:
      "",
    content: `Security became the focus this week. I attended a security awareness session and learned to identify and prevent common vulnerabilities.

**Security Topics:**

**Input Validation**
Never trust user input. I learned to validate and sanitize all data coming from users.

**Authentication & Authorization**
Understanding the difference between who you are (authentication) and what you can do (authorization).

**SQL Injection Prevention**
Using parameterized queries and ORMs to prevent SQL injection attacks.

**Cross-Site Scripting (XSS)**
Properly escaping output to prevent XSS vulnerabilities.

**Secure Password Handling**
Never store passwords in plain text. Always use proper hashing algorithms.

**HTTPS and Data Encryption**
Ensuring data is encrypted in transit and at rest.

This week opened my eyes to the importance of security in software development. As developers, we have a responsibility to protect user data and build secure applications.`,
  },
  {
    id: 11,
    title: "Week 11",
    date: "March 26, 2026",
    preview:
      "",
    content: `With the end of my OJT approaching, I was assigned a final project that would showcase everything I've learned. This project combines frontend, backend, database, and deployment skills.

**The Project:**
Building a task management dashboard with real-time updates.

**What I'm Implementing:**
- User authentication and authorization
- CRUD operations for tasks
- Real-time updates using WebSockets
- Responsive UI with modern design
- Database optimization for performance
- Comprehensive testing
- Deployment to production

**My Approach:**
I'm applying agile methodologies, breaking the project into sprints, and maintaining clean, documented code.

This final project is both challenging and exciting. It's an opportunity to demonstrate my growth and consolidate all the knowledge I've gained over the past weeks.`,
  },
  {
    id: 12,
    title: "Week 12",
    date: "April 2, 2026",
    preview:
      "",
    content: `My final week of OJT has arrived. Looking back at these twelve weeks, I'm amazed at how much I've learned and grown as a developer and professional.

**Key Takeaways:**

**Technical Growth**
I've gone from being nervous about reading code to confidently implementing features, fixing bugs, and understanding complex systems.

**Professional Development**
I've learned to communicate effectively, work in teams, manage time, and handle pressure.

**Practical Skills**
Git, agile methodologies, code reviews, testing, security, and deployment – these are skills I'll carry throughout my career.

**Mindset Shift**
I've learned that being a developer is about continuous learning, problem-solving, and collaboration, not just writing code.

**Future Goals:**
- Continue learning and staying updated with technology
- Contribute to open-source projects
- Build a strong professional network
- Apply these lessons in my future career

**Gratitude:**
I'm grateful to my mentors, team members, and everyone who supported me during this journey. This OJT has been transformative, and I'm leaving with confidence, skills, and a clear direction for my career.

To future interns: embrace challenges, ask questions, stay curious, and enjoy the journey. You'll learn more than you ever imagined!`,
  },
  {
    id: 13,
    title: "Week 13",
    date: "April 9, 2026",
    preview:
      "",
    content: `My internship has been extended for an additional five weeks! This week, I began working with microservices architecture and learned how to build scalable API endpoints.

**Microservices Fundamentals:**

**Service Separation**
I learned how to break down a monolithic application into smaller, independent services that can be developed, deployed, and scaled separately.

**API Gateway Pattern**
Understanding how an API gateway serves as a single entry point for clients and routes requests to appropriate microservices.

**Inter-Service Communication**
I explored different communication patterns between services, including REST APIs and message queues.

**What I Built:**
This week, I created a RESTful API for a user service that handles authentication and user profile management. I implemented proper error handling, input validation, and API documentation using Swagger.

**Challenges Faced:**
Managing service dependencies and ensuring proper error handling across distributed services was more complex than working with a monolithic application.

This week showed me the benefits and challenges of distributed systems. While microservices offer flexibility and scalability, they also require careful planning and robust error handling.`,
  },
  {
    id: 14,
    title: "Week 14",
    date: "April 16, 2026",
    preview:
      "",
    content: `This week was all about quality assurance and automation. I learned to write comprehensive tests and set up CI/CD pipelines to ensure code quality and smooth deployments.

**Testing Strategies:**

**Unit Testing**
I wrote unit tests for individual functions and components, learning to test edge cases and achieve good code coverage.

**Integration Testing**
Testing how different parts of the application work together, especially API endpoints and database interactions.

**End-to-End Testing**
I set up automated tests that simulate real user flows through the application.

**CI/CD Pipeline:**
I configured a continuous integration pipeline that automatically runs tests, performs code quality checks, and deploys to staging environments when tests pass.

**Tools I Used:**
- Jest for unit and integration testing
- Cypress for end-to-end testing
- GitHub Actions for CI/CD automation
- SonarQube for code quality analysis

**Impact:**
The automated testing caught several bugs before they reached production, saving time and preventing potential issues for users.

This week reinforced that testing is not optional – it's an essential part of professional software development. Automated testing gives confidence when making changes and helps maintain code quality over time.`,
  },
  {
    id: 15,
    title: "Week 15",
    date: "April 23, 2026",
    preview:
      "",
    content: `This week introduced me to cloud computing and deployment strategies. I learned to deploy applications on AWS and leverage cloud services for scalability and reliability.

**AWS Services Explored:**

**EC2 (Elastic Compute Cloud)**
I deployed our application on EC2 instances and learned about instance types, security groups, and load balancing.

**S3 (Simple Storage Service)**
Configured S3 buckets for storing static assets and learned about bucket policies and CDN integration.

**RDS (Relational Database Service)**
Migrated our database to RDS for better reliability, automated backups, and easier scaling.

**CloudFront**
Set up CloudFront as a CDN to deliver static content faster to users worldwide.

**Lambda**
Explored serverless computing by creating Lambda functions for background tasks and scheduled jobs.

**Key Learnings:**

**Infrastructure as Code**
I learned to use AWS CloudFormation to define and provision infrastructure programmatically.

**Monitoring and Logging**
Set up CloudWatch for monitoring application performance and logging errors.

**Cost Optimization**
Understanding how to optimize cloud costs through proper resource sizing and using reserved instances.

This week opened my eyes to the power of cloud computing. Being able to scale applications globally and pay only for what you use is revolutionary for modern software development.`,
  },
  {
    id: 16,
    title: "Week 16",
    date: "April 30, 2026",
    preview:
      "",
    content: `This week I took on more leadership responsibilities. I began mentoring a new intern and learned the importance of effective code reviews and knowledge sharing.

**Mentoring Experience:**

**Teaching Fundamentals**
I helped the new intern understand the codebase, development workflow, and company coding standards.

**Pair Programming**
We practiced pair programming, where I learned that teaching others actually deepens your own understanding.

**Creating Documentation**
I created comprehensive onboarding documentation to help future interns get up to speed faster.

**Code Review Best Practices:**

**Constructive Feedback**
I learned to provide specific, actionable feedback that helps developers improve without being discouraging.

**Asking Questions**
Instead of just pointing out issues, I learned to ask questions that help the author think critically about their code.

**Praising Good Work**
Acknowledging well-written code and good practices is just as important as pointing out areas for improvement.

**Knowledge Sharing:**
I organized a knowledge-sharing session where I presented on database optimization techniques I learned earlier in my internship.

**Personal Growth:**
Mentoring forced me to articulate concepts clearly and challenged me to think more deeply about best practices. Helping others succeed is incredibly rewarding.

This week taught me that senior developers aren't just technically skilled – they also lift up those around them through mentorship and knowledge sharing.`,
  },
  {
    id: 17,
    title: "Week 17",
    date: "May 7, 2026",
    preview:
      "",
    content: `As I conclude my extended 17-week OJT journey, I'm taking time to reflect on the incredible transformation I've experienced and prepare for the next chapter of my career.

**The Complete Journey:**

**From Beginner to Contributor**
I started organizing files and ended up building features, deploying to the cloud, and mentoring others. The growth has been exponential.

**Technical Mastery:**
- Full-stack development (frontend, backend, database)
- Cloud computing and DevOps practices
- Testing and quality assurance
- Security best practices
- Microservices architecture
- Continuous integration and deployment

**Professional Skills:**
- Effective communication in technical teams
- Agile methodologies and project management
- Code review and collaboration
- Problem-solving and debugging
- Time management and prioritization
- Mentorship and leadership

**Most Valuable Lessons:**

**1. Continuous Learning is Essential**
Technology evolves rapidly. Staying curious and committed to learning is crucial for long-term success.

**2. Soft Skills Matter**
Technical skills get you in the door, but communication, collaboration, and empathy determine how far you'll go.

**3. Don't Be Afraid to Ask**
Questions are not a sign of weakness – they're a sign of engagement and desire to learn.

**4. Quality Over Speed**
Taking time to write clean, tested, documented code saves time in the long run.

**5. Failure is Feedback**
Every bug, every mistake is an opportunity to learn and improve.

**Looking Ahead:**
I'm excited to apply everything I've learned in my future career. I have job offers to consider, personal projects to build, and open-source contributions to make. This internship has given me the foundation, confidence, and connections to build a successful career in software development.

**Final Gratitude:**
Thank you to everyone who made this journey possible – my mentors who patiently guided me, my team members who collaborated with me, and the new intern I had the privilege of mentoring. This experience has been life-changing.

**To Future IT Students:**
Your OJT is what you make of it. Embrace every opportunity, push yourself outside your comfort zone, document your journey, and most importantly – enjoy the process. The skills and experiences you gain will shape your entire career.

Here's to the next chapter! 🚀`,
  },
];