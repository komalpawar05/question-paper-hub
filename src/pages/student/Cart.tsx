
import TopbarActions from '../../components/student/TopbarActions'
import Topbar from '../../components/Topbar'
import PageHeader from '../../components/student/PageHeader'
import { FaShoppingCart } from 'react-icons/fa'

function Cart() {
  return (
    <div className="bg-gray-50 min-h-screen">
            <Topbar
                  title="QuestionHub"
                  rightContent={<TopbarActions />}
                />
                  <PageHeader
            title="My Cart"
            subtitle="Review your selected question papers"
            icon={<FaShoppingCart />}
          />
    </div>
  )
}

export default Cart