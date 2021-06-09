export default function About(about){
    return `
    <section id="about" class="intro">
        <div class="text-wrapper">
        <br><br>
                 <h1 class="title">${about[0].name}</h1>
                 <img src="${about[0].teaser}" div class="teaser">
                 <p>${about[0].description}</p>
        </div >    
    </section>`
}
