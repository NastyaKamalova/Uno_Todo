import TextBox from "../../ui/TextBox";

const EmptyBox = ({variant}) => {
    switch (variant) {
        case 'important': return (
            <TextBox 
                head={'Important Tasks'} 
                body={'Try starring some tasks to see them here.'}
                headColor={"white"}
                bodyColor={"white"}
            />
        ) 
        case 'search': return (
            <TextBox 
                head={'Task not found'} 
                body={"We searched high and low but couldn't find what you're looking for"}
                headColor={"gray"}
                bodyColor={"light-gray"}
            />
        )                
        case 'completed': return (
            <TextBox 
                head={'Completed Tasks'} 
                body={'Try starring some tasks to see them here.'}
                headColor={"white"}
                bodyColor={"white"}
            />
        ) 
        case 'list': return (
            <TextBox 
                head={'Lists'} 
                body={'Try creating some lists to see them here.'}
                headColor={"white"}
                bodyColor={"white"}
            />
        ) 
         default: return (
            <TextBox 
                head={'Tasks'} 
                body={'Сreate tasks to see them here.'}
                headColor={"white"}
                bodyColor={"white"}
            />
        )
    }
}

export default EmptyBox