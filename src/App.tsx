import CTA from "./components/CTA"
import Hero from "./components/Hero"
import Performance from "./components/Performance"
import ShowCase from "./components/ShowCase"
import Stories from "./components/Stories"


const App = () => {
  return (
    <div className="font-outfit">
<Hero/>
<Performance/>
<ShowCase/>
<Stories/>
<CTA/>
    </div>
  )
}

export default App