const Contact = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Contact Us</h1>

      <img
        src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzVzemdubHY2MW1lNXF6enQyMWUzOW14aW5kemJlenIwYTNiazNqMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l1KVboXQeiaX7FHgI/giphy.gif"
        alt="Funny gif"
        style={{ width: "500px", marginTop: "20px" }}
      />
      <h3>You can reach us via:</h3>
      <p
        style={{
          marginTop: "20px",
          fontSize: "32px",
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        carrier pigeon, smoke signals, or by shouting really loudly!
      </p>
    </div>
  );
};

export default Contact;
