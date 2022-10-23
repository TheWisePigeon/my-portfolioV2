<script lang="ts">
  const projects = [
    {
      name: "SuperSecret",
      link: "https://www.supersecretapp.ink",
      desc: "SuperSecret helps you manage and share  your environment variables with your team, easily and securely",
      stack: "TypeScript, JavaScript"
    },
    {
      name: "Git Stalker",
      link: "https://github.com/TheWisePigeon/gitStalker",
      desc: "A tool that scans public repos and tells if they contain sensitive information",
      stack: "Go"
    },
    {
      name: "pstr(For PyStrings)",
      link: "https://www.npmjs.com/package/pstr",
      desc: "A JavaScript port of some of Python's String methods",
      stack: "TypeScript, NodeJS",
    },
    {
      name: "Gel",
      link: "https://github.com/TheWisePigeon/releases/blob/main/Gel.README.md",
      desc: "A pseudo framework based on Vercel Go runtime cloud functions",
      stack: "Go, Vercel",
    },
    {
      name: "WValidator",
      link: "https://wvalidator.vercel.app",
      desc: "A form validation library",
      stack: "TypeScript",
    },
    {
      name: "Randomiz",
      link: "https://randomiz.vercel.app/",
      desc: "A random user data generator for API testing and mocking",
      stack: "JavaScript, Svelte, Python",
    },
    {
      name: "NVM GUI",
      link: "https://github.com/TheWisePigeon/nvm-gui#nvm-gui",
      desc: "A GUI for managing NodeJS versions",
      stack: "Rust, TypeScript",
    },
    {
      name: "Node-CinetPay",
      link: "https://www.npmjs.com/package/node-cinetpay",
      desc: "Unofficial npm module for Cinetpay's API",
      stack: "JavaScript, NPM",
    },
    {
      name: "Express-ts starter",
      link: "https://github.com/TheWisePigeon/express-ts-starter",
      desc: "Express with TypeScript project boilerplate",
      stack: "TypeScript, NodeJS, NPM",
    },
    
  ];
</script>

<div class=" p-4 lg:w-3/5 lg:m-auto lg:text-2xl">
  <div class=" flex justify-between items-baseline">
    <a href="/" class=" font-extrabold ">Joseph DOGBEVI</a>
    <div class=" flex justify-between space-x-2 ">
      <a href="/blog">
        <button
          class=" border-2 border-white hover:bg-white hover:text-slate-600 p-2 "
          >Blog</button
        >
      </a>
      <a href="/resume">
        <button
          class=" border-2 border-white hover:bg-white hover:text-slate-600 p-2 "
          >Resume</button
        >
      </a>
    </div>
  </div>
  <hr class=" my-4" />

  <div class=" space-y-3">
    {#each projects as project}
      <a class=" m-2" href={project.link}>
        <div
          class=" border-2 p-2 border-white  rounded-lg transform transition duration-500 hover:scale-110"
        >
          <p class=" text-red-500">{project.name}➚</p>
          <p>{project.desc}</p>
          <p>Stack: {project.stack} </p>
        </div>
      </a>
    {/each}
  </div>
</div>
