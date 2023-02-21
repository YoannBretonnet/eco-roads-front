// == Style
import './styles.scss';

function FlippingCards() {
    return (
        <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
                <h1>John Doe</h1> 
            </div>
          <div class="flip-card-back">
            <p>Architect & Engineer</p> 
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    );
}

export default FlippingCards;