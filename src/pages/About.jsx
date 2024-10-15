const About = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>About Us</h1>
      <p>Welcome to the most amazing app ever created!</p>

      <p>
        Fun fact: Did you know that our lead developer Ian once coded an entire
        app using only emojis? (Okay, maybe not, but it sounds cool, right?)
      </p>

      <p style={{ fontSize: "20px" }}>
        <b>
          ✨Special thanks to Beyoncé for helping build this app. Your
          inspiration and music kept us going!✨
        </b>
      </p>

      <img
        src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc25tbTZieXE1dmJmZXliOWR0ejdic2Z2aGJuYnAzaWtmNjcxdHFubSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohhwF34cGDoFFhRfy/giphy.gif"
        alt="Funny gif"
        style={{ width: "300px", marginTop: "20px" }}
      />
    </div>
  );
};

export default About;


