import ProcessHeading from "@/material-ui/ProcessHeading"
import WorkflowArc from "@/material-ui/WorkflowArc"


const Process = () => {
  return (
   <div className="relative hero min-h-screen max-w-full p-4 sm:p-6 md:p-10
    overflow-hidden bg-[#041b1c]" 
   >
       <ProcessHeading/>

       {/* Globe section  */}
       <WorkflowArc/>
    </div>
  )
}

export default Process