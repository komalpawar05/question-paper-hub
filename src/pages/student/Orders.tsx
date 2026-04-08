
import TopbarActions from '../../components/student/TopbarActions'
import Topbar from '../../components/Topbar'
import PageHeader from '../../components/student/PageHeader'
import { CiReceipt } from 'react-icons/ci'


function Orders() {
  return (
     <div className="bg-gray-50 min-h-screen">
            <Topbar
                  title="QuestionHub"
                  rightContent={<TopbarActions />}
                />
                  <PageHeader
            title="My Orders"
            subtitle="View and download your purchased question papers"
            icon={<CiReceipt  />}
          />
    </div>
  )
}

export default Orders