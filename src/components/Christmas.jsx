import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";


const Example = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Wasabiiwooman</h1>
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="carousel-container">
      <div className="carousel-inner">
        <motion.div style={{ x }} className="carousel-items">
          {cards.map((card) => {
            if (card.type === 'image') {
              return <Card card={card} key={card.id} />;
            } else if (card.type === 'text') {
              return (
                <div className="text-card" key={card.id}>
                  <p>{card.content}</p>
                </div>
              );
            }
            return null;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
    return (
      <div key={card.id} className={`card ${card.className}`}>
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="card-bg"
        ></div>
        <div className="card-content">
        </div>
      </div>
    );
  };
  

export default Example;

const cards = [
    {
      url: "images/CHRISTMAS.png",
      id: 1,
      type: 'image',
      className: 'christmas-card'
    },
    {
      url: "images/TRAIN.jpg",
      id: 2,
      type: 'image',
      className: 'train-card'
    },
    {
      url: "images/STREET.png",
      id: 3,
      type: 'image',
      className: 'street-card'
    },
    {
      url: "images/SINK.jpg",
      id: 4,
      type: 'image',
      className: 'sink-card'
    },
    {
      url: "images/HORNS.jpg",
      id: 5,
      type: 'image',
      className: 'horns-card'
    },
    {
      url: "images/MIRA.png",
      id: 6,
      type: 'image',
      className: 'mira-card'
    },
    {
      url: "images/JASPER.png",
      id: 7,
      type: 'image',
      className: 'jasper-card'
    },
    {
      url: "images/FALLING.png",
      id: 8,
      type: 'image',
      className: 'falling-card'
    },
    {
      url: "images/SHY.jpg",
      id: 9,
      type: 'image',
      className: 'shy-card'
    },
    {
    //   content: "In ac mauris eu massa sodales dapibus. Phasellus ut magna id tellus finibus mattis quis euismod massa. Cras non gravida enim, vitae scelerisque sem. Nam feugiat, diam id luctus interdum, velit magna lacinia tortor, vitae lobortis leo turpis sed erat. Phasellus vitae lorem nec arcu ultricies pellentesque. Mauris lacus massa, pharetra id orci eget, imperdiet semper lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum sollicitudin mauris in ornare. Mauris arcu quam, aliquet non mattis ut, tincidunt pretium ipsum. Aenean sapien urna, congue et tempus vitae, semper sit amet velit. Mauris eget felis porttitor, rutrum turpis in, sollicitudin turpis. Etiam vestibulum tempus neque a ultrices. Sed in mollis odio. Fusce nulla nisl, suscipit venenatis lorem at, convallis tempus ante.",
    //   url:"",
    //   id: 10,
    //   type: 'text',
    //   className: 'hello-text'
    },
  ];
  