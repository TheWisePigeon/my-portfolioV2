<script lang="ts" >
  const works = [
    {
      date: "06/2022 - Now",
      company:"Backend Developer @Axetag SAS",
      company_link:"https://www.linkedin.com/company/axetag-sas/mycompany/",
      description:`Developed, deployed and maintained REST APIs. Trained and deployed an experimental machine learning model`,
      stack:"Python • Flask"
    },
    {
      date: "04/2022 - 06/2022",
      company:"Web developer Intern @A2B Tech",
      company_link:"https://github.com/A2B-TECH",
      description:`Worked on an E-Commerce web application`,
      stack:"TypeScript • Express • NextJS"
    }
  ]
  const projects = [
    {
      name:"Rex",
      description:"Rex is a  CLI tool to quickly bootstrap Express projects, with TypeScript support. Rex forces the user to use a clean architecture and offer some additional utilities to help speed up development",
      stack:"Rust",
      link:"https://github.com/TheWisePigeon/rex#readme"
    },
    {
      name:"SuperSecret",
      description:"Break free from the burden of managing and sharing your secrets through .env files. SuperSecret brings an easy and secure solution",
      stack:"TypeScript • NodeJS • Express • Svelte",
      link:"https://supersecretapp.ink"
    },
    {
      name:"YOOT(In development)",
      description:"YOOT is a simplistic CMS designed for developers and content based business runners",
      stack:"TypeScript • Svelte • Tauri",
      link:"https://yoot.site"
    },
    {
      name:"WValidator",
      description:"Validator is a form validation library",
      stack:"TypeScript",
      link:"http://wvalidator.vercel.app/"
    },
    {
      name:"Loland",
      description:"Just a website to post memes",
      stack:"TypeScript • Firebase • Svelte",
      link:"https://loland.lol"
    }
  ]
</script>

<!-- Profile -->
<div class=" m-auto text-gray-400 pt-20 w-[450px]">
  <div class=" flex gap-10 items-center">
    <div
      class=" h-20 w-20 rounded-full border-gray-200 border bg-transparent bg-[url('/images/flowers-designify.png')] bg-no-repeat bg-contain"
    />
    <div class="text-[1rem] flex flex-col  gap-1">
      <h1 class=" font-bold  text-gray-100">Joseph DOGBEVI</h1>
      <h1 class=" text-[1rem]">Results-driven Software developer</h1>
      <div class="flex gap-10">
        <a href="https://github.com/TheWisePigeon" target="_blank">
          <svg
            role="img"
            class="h-5 w-5 cursor-pointer"
            fill="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ><title>GitHub</title><path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            /></svg
          >
        </a>
        <a href="https://twitter.com/pigeondev0_0" target="_blank">
          <svg
            role="img"
            fill="white"
            class="h-5 w-5 cursor-pointer"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ><title>Twitter</title><path
              d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
            /></svg
          >
        </a>
        <a
          href="https://discordapp.com/users/624747283640221723"
          target="_blank"
        >
          <svg
            role="img"
            fill="white"
            class="h-5 w-5 cursor-pointer"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ><title>Discord</title><path
              d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
            /></svg
          >
        </a>
        <a
          href="https://www.linkedin.com/in/joseph-dogbevi-aka-thewisepigeon/"
          target="_blank"
        >
          <svg
            role="img"
            fill="white"
            class="h-5 w-5 cursor-pointer"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ><title>LinkedIn</title><path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            /></svg
          >
        </a>
        <a href="mailto:josephdogbevi2002@gmail.com">
          <svg
            role="img"
            class="h-5 w-5 cursor-pointer"
            fill="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ><title>Gmail</title><path
              d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
            /></svg
          >
        </a>
      </div>
    </div>
  </div>
</div>

<!-- About -->
<div class=" m-auto flex flex-col w-[450px] text-[1rem]">
  <h1 class=" text-white font-bold">About</h1>
  <p class=" text-clip text-gray-400 text-[1rem]">
    Hi! I'm Joseph, also knows as TheWisePigeon. I enjoy building things on the
    web and beyond. Focused on crafting performant and reliable services in
    order to deliver the best experience possible to end users. <br />
    I read, write, work on side projects or play video games in my spare time.
  </p>
</div>

<!-- Resume -->
<div class="text-[1rem] m-auto flex flex-col w-[450px]">
  <h1 class=" text-white font-bold">Work experience</h1>
  {#each works as work}  
    <div class="my-3">
      <div class=" w-full flex justify-between" >
        <h1 class=" text-slate-400" >{work.date}</h1>
        <a href={work.company_link} target="_blank" class=" hover:underline text-white">{work.company} ➚</a>
      </div>
      <p class=" text-gray-400" >{work.description}</p>
      <div class=" text-slate-500 font-bold" > {work.stack} </div>
    </div>
  {/each}
</div>

<!-- Projects -->
<div class="text-[1rem] m-auto flex flex-col w-[450px]" >
  <h1 class=" text-white font-bold" >Projects</h1>
  {#each projects as project}
    <div class="w-full cursor-pointer my-2" >
      <a href={project.link} target="_blank" class=" hover:underline text-white font-bold" >{project.name} ➚</a>
      <h1 class=" text-gray-400" >{project.description}</h1>
      <h1 class=" text-slate-500" >{project.stack}</h1>
    </div>
  {/each}
</div>

<!-- Blog posts -->
