import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="div flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          AI-Powred Prompts
        </span>
      </h1>
      <p className="desc text-center">
        Promptopia Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nulla atque, natus in deleniti ratione incidunt asperiores minima, est officiis perspiciatis placeat beatae temporibus voluptatibus, non nihil tenetur odio! Rerum?
      </p>
      <Feed />
    </section>
  )
}

export default Home
