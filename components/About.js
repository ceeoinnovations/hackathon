export default function About(about){
    return `
    <section id="about" class="intro">
        <div class="text-wrapper">
        <br><br>
                 <h1 class="title">${about[0].name}</h1>
                 <p>${about[0].description}</p>
                 <div class="project-img">
                    <img src="${about[0].image1}" div class="project-img-holder">
                    <img src="${about[0].image2}" div class="project-img-holder">
                 </div>
                 <button class="button" style="margin-top: 40px; margin-bottom: 100px;"><a href="${about[0].buttonlink}" target="_blank">${about[0].buttonlabel}</a></button>
        </div >    
    </section>`
}
