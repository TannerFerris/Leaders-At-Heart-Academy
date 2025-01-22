import { Helmet } from 'react-helmet';
import ApplyForm from "../Components/ApplyForm";


function Apply () {
    return(
        <>
                    <Helmet>
      <title>Leaders At Heart - Apply</title>
    </Helmet>
        <div className="Banner">APPLY</div>
        <ApplyForm />
        </>
    )
}

export default Apply;