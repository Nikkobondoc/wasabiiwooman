import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

const Christmas = () => {
    const child = { width: `30em`, height: `100%` };
  return (
    <div style={{ height: '90vh', overflowY: 'auto', overflowX: 'auto', width: '100%' }}>

      <ScrollMenu>
        <div style={{ width: '100px' }} itemId="2" title="Train"> {/* Adjust width as needed */}
          <h1>WASABIIWOOMAN</h1>
          <img className="christmas" src="/images/CHRISTMAS.png" alt="Christmas" style={child} />
        </div>
        
        <div style={child} itemId="2" title="Train"> {/* Adjust width as needed */}
          <img className="train" src="/images/TRAIN.jpg" alt="Train" style={child} />
        </div>
        <div itemId="3" title="Street">
          <img className='street' src="/images/STREET.png" alt="Street" style={child} />
        </div>
        <div itemId="4" title="Horns">
          <img className="horns" src="/images/HORNS.jpg" alt="Horns" style={child} />
        </div>
        <div itemId="5" title="Mira">
          <img className="mira" src="/images/MIRA.png" alt="Mira" style={child} />
        </div>
        <div className='transition' itemId="6" title="Transition"></div>
        <div itemId="7" title="Horns">
          <img className="horns" src="/images/HORNS.jpg" alt="Horns" style={child} />
        </div>
        <div itemId="8" title="Mira">
          <img className="mira" src="/images/MIRA.png" alt="Mira" style={child} />
        </div>
        <div itemId="9" title="Horns">
          <img className="horns" src="/images/HORNS.jpg" alt="Horns" style={child} />
        </div>
        <div itemId="10" title="Mira">
          <img className="mira" src="/images/MIRA.png" alt="Mira" style={child} />
        </div>
        <div itemId="11" title="Jasper">
          <img className='jasper' src="/images/JASPER.png" alt="Jasper" style={child} />
        </div>
        <div itemId="12" title="Falling">
          <img className="falling" src="/images/FALLING.png" alt="Falling" style={child} />
        </div>
        <div itemId="13" title="Text">
          <p style={child}>
            In ac mauris eu massa sodales dapibus. Phasellus ut magna id tellus finibus mattis quis euismod massa. Cras non gravida enim, vitae scelerisque sem. Nam feugiat, diam id luctus interdum, velit magna lacinia tortor, vitae lobortis leo turpis sed erat. Phasellus vitae lorem nec arcu ultricies pellentesque. Mauris lacus massa, pharetra id orci eget, imperdiet semper lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum sollicitudin mauris in ornare. Mauris arcu quam, aliquet non mattis ut, tincidunt pretium ipsum. Aenean sapien urna, congue et tempus vitae, semper sit amet velit. Mauris eget felis porttitor, rutrum turpis in, sollicitudin turpis. Etiam vestibulum tempus neque a ultrices. Sed in mollis odio. Fusce nulla nisl, suscipit venenatis lorem at, convallis tempus ante.
          </p>
          <p>Sincerely, Wasabiiwooman</p>
        </div>
        <div className='socials-btn' itemId="14" title="Socials">
          <button>Socials</button>
        </div>
      </ScrollMenu>
    </div>
  );
};

export default Christmas;
