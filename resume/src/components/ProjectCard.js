// props [ title, description, image, github ]
function ProjectCard (props) {
    return (
        <div class="p-20 h-50pm w-100pm">
            <div className="flex flex-col">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img src={props.image} className="h-50 w-50 rounded-md shadow-xl shadow-gray-800" />
                        <div className="ml-4">
                            <div className="text-lg font-medium" href={props.link}>
                                <p class="text-2xl text-bold underline">{props.title}</p>
                            </div>
                            <div className="text-sm font-medium">
                                {props.description}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="text-sm">
                            <span className="text-gray-500">
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ProjectCard;