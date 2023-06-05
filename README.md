# next-starter

`Next Starter` provides the foundational structure of your project and preloads all the necessary packages for a fresh start. 
This eliminates the need to recreate the same **structure and reinstall packages** for every new project. 

When you start a new project using `Next Starter`, you can immediately dive into the **development process**.


**What packages are included in Next Starter?**

- Bootstrap Package (Javascript && Styles)
- Fontawesome Package (Free brands && Solid Icons)
- Styled Components (Styling your way with speed, strong typing, and flexibility.)

## Starter

    git clone https://github.com/Frontekip/next-starter.git
    cd next-starter
    yarn && yarn dev
    
## Docker

    docker build -t next-starter:latest .
    docker run --name next-starter -d -it -p 3000:3000 next-starter

## Vercel

Deploys production directly for vercel.

    yarn deploy
