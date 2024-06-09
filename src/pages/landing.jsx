import useState from "react"

export const Landing = () => {
    const [visible, setVisible] = useState(false)


    const showIntro = () => {
        setVisible(!visible)
    }

    return (
        <div>
            <h2>Hi there!</h2>
            <button onClick={showIntro}>...Who are you?</button>
            <h3 >Glad you asked...</h3>
                <p>
                    My name is Federico, and I build software. I am a full-stack developer from Argentina, to the world.
                    My first projects were games: first a chess game and then a Tetris clone, both using Java and Swing; but now I've pivoted
                    to Web Development. I think the portability of the web make it ideal for delivery of tools and applications to users worldwide.  
                    I believe that every single decision when creating something should be taken with the user being the top priority,
                    taking shortcuts inevitably leads to more work and a worse experience for everyone involved.
                    I've cultivated expertise with a wide variety of technologies, such as Javascript with the React framework, Python, Java and some dabbling in C.
                </p>
                <button>My projects</button>
                <button>Some useless trivia</button>
        </div>
    );
}