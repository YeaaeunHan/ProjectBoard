const PriorityDisplay = ({ priority }) => {

    return (
      <div className="priority-display">
        <div className="star-container">
          <h3 style={{color: priority >=1 ? 'rgb(249, 95, 109)' : ''}}>★</h3>
          <h3 style={{color: priority >=2 ? 'rgb(249, 95, 109)' : ''}}>★</h3>
          <h3 style={{color: priority >=3 ? 'rgb(249, 95, 109)' : ''}}>★</h3>
          <h3 style={{color: priority >=4 ? 'rgb(249, 95, 109)' : ''}}>★</h3>
          <h3 style={{color: priority >=5 ? 'rgb(249, 95, 109)' : ''}}>★</h3>
        </div>
      </div>
    )
  }
  
  export default PriorityDisplay