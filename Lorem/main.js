const text=[
    `I'm baby umami PBR&B four loko wolf seitan wayfarers bespoke shaman palo santo beard street art. Typewriter air plant umami banh mi mustache meh vibecession praxis raclette chicharrones health goth try-hard gatekeep palo santo venmo. DSA portland actually, viral next level raw denim pabst sustainable keytar banh mi pug stumptown paleo pitchfork. Everyday carry aesthetic gatekeep four loko, cold-pressed big mood cornhole intelligentsia. Kale chips normcore pitchfork, disrupt bespoke stumptown portland mixtape locavore craft beer cardigan. Distillery DSA cliche roof party truffaut heirloom kickstarter next level mlkshk. Shoreditch mixtape raw denim fit williamsburg four dollar toast drinking vinegar art party kitsch echo park.`,
    `Semiotics man bun drinking vinegar direct trade kitsch. Venmo godard wayfarers, photo booth before they sold out kinfolk praxis synth woke slow-carb pabst vegan meditation narwhal. Godard mumblecore disrupt artisan dreamcatcher, tousled before they sold out polaroid kinfolk DSA green juice PBR&B four loko. Austin etsy williamsburg, tilde coloring book blue bottle man braid bitters you probably haven't heard of them.`,
    `Green juice Brooklyn shaman gochujang beard waistcoat, semiotics cronut. Forage biodiesel truffaut, kickstarter affogato squid umami flexitarian skateboard occupy tacos banh mi edison bulb sustainable hot chicken. Readymade kombucha woke ethical, put a bird on it offal waistcoat mustache freegan chicharrones cred kickstarter. Helvetica tacos gastropub vinyl. Neutra drinking vinegar artisan art party bitters. Fanny pack edison bulb glossier, waistcoat cornhole asymmetrical tacos tumblr vice synth woke pabst. Semiotics retro schlitz gastropub.`,
    `Chicharrones keytar vice before they sold out banjo typewriter hammock mukbang bushwick tumeric +1 taxidermy hexagon. Selfies raclette subway tile, iPhone biodiesel pitchfork VHS meh hammock. Cronut DIY deep v banh mi put a bird on it everyday carry. DSA messenger bag Brooklyn +1, pug XOXO readymade irony farm-to-table mustache tacos.`,
    `Lyft vape cred, actually chambray neutra hammock pinterest asymmetrical. DIY unicorn authentic waistcoat, distillery drinking vinegar succulents ramps. Tattooed fingerstache DSA yuccie. Yr literally banjo sus. Selvage lyft banjo seitan kombucha offal cronut fit. Put a bird on it man bun YOLO tote bag succulents, migas XOXO intelligentsia. Portland af venmo, Brooklyn gochujang whatever flannel.`,
    `Deep v crucifix vibecession ascot street art mustache. Woke pinterest cred biodiesel schlitz chillwave street art aesthetic crucifix whatever 8-bit plaid hammock meggings dreamcatcher. Sartorial whatever dreamcatcher hexagon mumblecore pork belly. Offal polaroid tumblr authentic messenger bag YOLO helvetica. Cold-pressed irony sriracha, shabby chic truffaut DIY craft beer YOLO activated charcoal bitters vaporware celiac raw denim vexillologist. 3 wolf moon mlkshk truffaut cred normcore bruh. Actually hot chicken you probably haven't heard of them authentic taiyaki 90's etsy XOXO bodega boys live-edge mlkshk vinyl artisan.`,
    `Single-origin coffee chillwave same normcore cred fit farm-to-table quinoa tonx artisan PBR&B tumeric fam raw denim. Pop-up offal af JOMO drinking vinegar unicorn health goth four dollar toast tumeric mumblecore lomo. Raw denim selvage etsy, Brooklyn migas gastropub lomo mukbang pok pok you probably haven't heard of them seitan pinterest ascot. Keffiyeh actually semiotics synth shaman live-edge wolf truffaut jianbing green juice vaporware kinfolk fixie chillwave mukbang. Retro coloring book gochujang church-key pabst wolf freegan raclette intelligentsia meditation forage health goth jean shorts craft beer. Viral mumblecore 3 wolf moon tilde, vaporware yuccie seitan.`,
    `Keffiyeh chillwave slow-carb jianbing pinterest. Chicharrones venmo ennui DIY pickled, aesthetic meh affogato. Truffaut tumeric selvage hella, tattooed meggings farm-to-table mukbang cliche quinoa distillery fixie raw denim. Four loko tattooed forage, snackwave waistcoat poke kickstarter pork belly tousled adaptogen squid organic copper mug butcher mixtape. Sustainable fingerstache XOXO, beard next level tbh biodiesel woke truffaut kombucha raclette PBR&B enamel pin. Salvia hashtag celiac squid hella pug prism.`,
    `Pop-up fanny pack bruh lyft, VHS organic leggings umami food truck readymade kitsch edison bulb small batch bicycle rights. Pug echo park godard health goth, palo santo vinyl la croix brunch keffiyeh +1. Seitan portland everyday carry normcore artisan shaman cornhole coloring book pour-over jean shorts af tumeric meggings. Taxidermy air plant kale chips iPhone. Disrupt sriracha biodiesel gatekeep, synth 3 wolf moon occupy activated charcoal crucifix mukbang. Squid marfa letterpress copper mug mustache pickled, cold-pressed helvetica lomo lyft echo park neutra hashtag iceland. 90's plaid sriracha meh deep v mustache hella keytar.`,
    `Adaptogen hexagon ramps drinking vinegar paleo poke. Dreamcatcher meggings sustainable narwhal, yr keytar 90's. Schlitz food truck gochujang organic banjo air plant wayfarers. Tofu normcore four dollar toast meggings quinoa bespoke marfa roof party umami tonx hoodie heirloom pitchfork mixtape microdosing. Selvage activated charcoal YOLO taiyaki hella cornhole mukbang tumblr cold-pressed. Migas yuccie photo booth vaporware.`
]

const form=document.querySelector('.lorem-form');
const numofpara=document.getElementById('numofpara');
const numofparaRange=document.getElementById('numofparaRange');
const result=document.querySelector('.lorem-text');

function syncParaNumbers(e){
    const value=e.target.value;
    numofpara.value=value;
    numofparaRange.value=value;
}

form.addEventListener('submit',e=>{
    e.preventDefault();
    const value=parseInt(numofpara.value);
    let tempText=text.slice(0,value);
    tempText=tempText.map(item=>`<p class="result">${item}</p>`).join("");
    result.innerHTML=tempText ;
})
numofpara.addEventListener('input',syncParaNumbers);

numofparaRange.addEventListener('input',syncParaNumbers);