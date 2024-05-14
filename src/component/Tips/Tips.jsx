import React from 'react';
import './Tips.css'

const Tips = () => {
    return (
        <div className='tip-main-container'>
           <h1>Tip your delivery partner</h1>
           <p>Your kindness means a lot! 100% of your tip will go directly to your delivery partner.</p>
           <div className='tips-emoji-tipped'>
              <ul className='tips-emoji-tipped-section'>
                <img src={"https://b.zmtcdn.com/data/o2_assets/2ef961c631b0b3ec214689aca4e95efd1633353812.png?output-format=webp"} className='tips-emoji'/>
                <li> ₹20</li>
              </ul>

              <ul className='tips-emoji-tipped-section'>
                <img src={"https://b.zmtcdn.com/data/o2_assets/047a7d05ee3bbad4db7e962c25d759cd1633508344.png?output-format=webp"} className='tips-emoji'/>
                <li> ₹30</li>
              </ul>


              <ul  className='tips-emoji-tipped-section'>
                <img src={"https://b.zmtcdn.com/data/o2_assets/3eff26c9392c33254d314ce8758ffae51633353789.png?output-format=webp"} className='tips-emoji'/>
                <li> ₹50</li>
              </ul>


              <ul  className='tips-emoji-tipped-section'>
                <img src={"https://b.zmtcdn.com/data/o2_assets/03d81bf421d41531bc222d12ff3ea52f1633353842.png?output-format=webp"} className='tips-emoji'/>
                <li> Custom</li>
              </ul>




           </div>
            
        </div>
    );
}

export default Tips;
