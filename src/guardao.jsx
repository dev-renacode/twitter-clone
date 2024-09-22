import React from 'react'

const guardao = () => {
  return (
    <div>
      <div className="">
        <SideBar userName="Renato Herrera" nameTag="@devrena17" />
      </div>
      <div className="col-span-2 border border-[#71767b]/50">
        <TwitterPost 
          userName="Miguel Ángel Durán" 
          nameTag="@midudev" 
          text="Well, one lesson I’ve learned is that just because I say something to a group and they laugh doesn’t mean it’s going to be all that hilarious as a post on 𝕏" 
          verified={true} />

        <TwitterPost 
          userName="Renato Herrera" 
          nameTag="@devrena17" 
          text="Creo que alguien anda clonando páginas web :v" 
          verified={true} />

        <TwitterPost 
          userName="Elon Musk" 
          nameTag="@elonmusk" 
          text="Well, one lesson I’ve learned is that just because I say something to a group and they laugh doesn’t mean it’s going to be all that hilarious as a post on 𝕏" 
          verified={true} />

        <TwitterPost 
          userName="Brais Moure" 
          nameTag="@MoureDev" 
          text="HOY LUNES tenemos nueva clase de lógica de programación en directo (válida para cualquier lenguaje)." 
          verified={true} />

        <TwitterPost 
          userName="FC Barcelona" 
          nameTag="@FcBarcelona" 
          text="The Wall, in black and white." 
          verified={true} />

        <TwitterPost 
          userName="GitHub" 
          nameTag="@github" 
          text="Open source software underpins all sectors of the economy, public services, and even international organizations like the United Nations. 🌐  Learn how the public and private sectors can work together to make open source more sustainable." 
          verified={true} />
        <TwitterPost 
          userName="elrubius" 
          nameTag="@Rubiu5" 
          text=":v" 
          verified={true} />
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default guardao
