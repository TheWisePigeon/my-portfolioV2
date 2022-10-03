<script lang="ts">
  const posts = [
    {
      title: "Microservices explained by a pigeon➚",
      desc: "Microservice vs Monolithic architecture",
      link: "https://thepigeondev.hashnode.dev/microservices-explained-by-a-pigeon-part-1",
    },{
      title: "Scalability explained by a pigeon➚",
      desc: "Software scalability explained with illustrations",
      link: "https://thepigeondev.hashnode.dev/scalability-explained-by-a-pigeon",
    },
    {
      title: "JavaScript101: Arrow functions➚",
      desc: "ES6 Arrow functions explained",
      link: "https://pigeondev-blog.vercel.app/posts/JS101",
    },
    {
      title: "WebDev101➚",
      desc: "Basic stuff about web development",
      link: "https://pigeondev-blog.vercel.app/posts/WebDev101",
    },
    {
      title: "React is not a framework➚",
      desc: "Frameworks vs libraries",
      link: "https://pigeonscript.co/posts/react-is-not-a-framework",
    },
    {
      title: "Map, Filter, Reduce➚",
      desc: "ES6 Array methods explained",
      link: "https://pigeonscript.co/posts/map-filter-reduce",
    },
    {
      title: "PyScript➚",
      desc: "The power of python in the browser",
      link: "https://pigeonscript.co/posts/pyscript-a-quick-overview",
    },
    {
      title: "Node Fetch API➚",
      desc: "Quick overview of the node fetch API",
      link: "https://pigeonscript.co/posts/node-fetch-is-here",
    },
  ];
</script>

<div class=" p-4 lg:w-3/5 lg:m-auto lg:text-2xl">
  <div class=" flex justify-between items-baseline ">
    <a href="/" class=" font-extrabold">Joseph DOGBEVI</a>
    <div class=" flex justify-between space-x-2 ">
      <a href="/resume">
        <button
          class=" border-2 border-white hover:bg-white hover:text-slate-600 p-2 "
          >Resume</button
        >
      </a>
      <a href="/projects">
        <button
          class=" border-2 border-white hover:bg-white hover:text-slate-600 p-2 "
          >Projects</button
        >
      </a>
    </div>
  </div>
  <hr class="my-4" />
 <div class=" space-y-3">
    {#each posts as project}
      <a class=" m-2" href={project.link}>
        <div
          class=" border-2 p-2 border-white  rounded-lg transform transition duration-500 hover:scale-110"
        >
          <p class=" text-red-500">{project.title}</p>
          <p>{project.desc}</p>
        </div>
      </a>
    {/each}
  </div>
</div>
