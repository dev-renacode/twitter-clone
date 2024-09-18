import TwitterPost from "./components/TwitterPost"

function App() {
  //#E7E9EA text color
  return (
    <>
      <div className="flex flex-col gap-3 justify-center items-center h-screen">
        <TwitterPost 
        userName="Miguel Ángel Durán" 
        nameTag="@midudev"
        text="Well, one lesson I’ve learned is that just because I say something to a group and they laugh doesn’t mean it’s going to be all that hilarious as a post on 𝕏"
        verified={true}
        />
        <TwitterPost 
        userName="Elon Musk" 
        nameTag="@elonmusk"
        text="Well, one lesson I’ve learned is that just because I say something to a group and they laugh doesn’t mean it’s going to be all that hilarious as a post on 𝕏"
        verified={true}
        />
        <TwitterPost 
        userName="Renato Herrera" 
        nameTag="@devrena17"
        text="Well, one lesson I’ve learned is that just because I say something to a group and they laugh doesn’t mean it’s going to be all that hilarious as a post on 𝕏"
        verified={false}
        />
      </div>
    </>
  )
}

export default App
