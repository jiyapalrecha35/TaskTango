import React from 'react'

export default function About(props) {
    let myStyle={
        color:props.mode==='dark'?'white':'black',
        backgroundColor:props.mode==='dark'?'#333333':'#E0E4EB',
        border:'1px solid',
        borderColor:props.mode==='dark'?'white':'black'
     };
    return (
        <div className="accordion container my-5" style={{minHeight:"70vh"}} id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style={myStyle}   type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>About-TodoList</strong>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle} >
                        <p>The definition is a simple one. It’s a list of tasks you need to complete or things that you want to do.Most typically, they’re organised in order of priority. Traditionally, they’re written on a piece of paper or post it notes and act as a memory aid. As technology has evolved we have been able to create a todo lists with excel spreadsheets, word documents, email lists, todo list apps, Microsoft to do and google to do list to name a few. You can use a to do list in your home and personal life, or in the workplace.Having a list of everything you need to do written down in one place means you shouldn’t forget anything important. By prioritising the tasks in the list you plan the order in which you’re going to do them and can quickly see what needs your immediate attention and what tasks you can leave until a little later.</p>

                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}  >
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Importance</strong>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle} >
                        <p>One of the most important reasons you should use a to do list is that it will help you stay organised. When you write all your tasks in a list, they seem more manageable. When you’ve got a clear outline of the tasks you’ve got to do and those you’ve completed, it helps you stay focused. While freeing up space in your mind for other more creative tasks.

                            When you complete a task, you can cross it off your list. This gives you a sense of progress and achievement, something you’ll lack if you’re always rushing from one task to the next. If you feel a sense of achievement, it spurs you on and motivates you to keep moving forward.</p>
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle} >
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Easy to remove and add tasks</strong>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle} >
                        <p>It seems such a simple solution by putting pen to paper and taking time out of your day to create a to do list, a plan for your day helps define your challenges and goals. Preventing time from being wasted trying to identify what is the next most important task to tackle next and even more important makes sure you don't forget to do something important.

                            To-do lists offer a way to increase productivity, stopping you from forgetting things, helps prioritise tasks, manage tasks effectively, use time wisely and improve time management as well as workflow.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
