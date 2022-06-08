import TicketCard from '../components/TicketCard'
const Dashboard=()=>{

    const tickets=[
        {
            category: 'Web',
            color:'red',
            title: 'workshop',
            owner: 'YH',
            status: 'done',
            priority: 5,
            progress: 40,
            description: 'hey',
            timestamp: '2022-02-11T07:36:17+0000'
        },        
        {
            category: 'C++',
            color:'blue',
            title: 'Test',
            owner: 'SJ',
            status: 'working',
            priority: 3,
            progress: 80,
            description: 'would',
            timestamp: '2022-02-15T07:36:17+0000'
        }

    ]

    const colors = [
        'rgb(255,179,186)',
        'rgb(255,223,186)',
        'rgb(255,255,186)',
        'rgb(186,255,201)',
        'rgb(186,225,255)',
      ]

    const uniqueCategories=[
        ...new Set(tickets?.map(({category})=> category))
    ]

    return (
        <div className="dashboard">
            <h1>My Projects</h1>
            <div className="ticket-container">
            {/* <TicketCard/> */}
            {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex)=>(
                <div key={categoryIndex}>
                    <h3>{uniqueCategory}</h3>
                    {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, ticketIndex) => (
                  <TicketCard
                    id={ticketIndex}
                    color={colors[categoryIndex] || colors[0]}
                    ticket={filteredTicket}
                  />
                ))}
                </div>
            ))}
            </div>
        </div>
    )
}
export default Dashboard;