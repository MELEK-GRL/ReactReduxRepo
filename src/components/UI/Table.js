import { Link } from "react-router-dom";
import TableItems from "../../components/UI/TableItems";
import { useSelector } from "react-redux";

function Table() {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);

  return (
    <div className="w-full boxCenter">
      <div className="w-full flex-col flex gap-8">
        <div className="flex w-full ">
          {cartItems.length === 0 ? (
            <h1 className="boxCenter p-2 text-xl w-full text-rose-900 font-semibold">
              Your cart is empty
            </h1>
          ) : (
            <table className=" md:border-collapse w-full border-collapse border border-slate-400">
              <thead className="w-full ">
                <tr className="w-full ">
                  <th className="border-b p-1 border-slate-300">Image</th>
                  <th className="border-b p-1 border-slate-300">Product</th>
                  <th className="border-b p-1 border-slate-300">Price</th>
                  <th className="border-b p-1 border-slate-300">Quantity</th>
                  <th className="border-b p-1 border-slate-300">Delete</th>
                </tr>
              </thead>
              <tbody className="w-full">
                {cartItems.map((item) => (
                  <TableItems key={item.id} item={item} />
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className="boxStart w-full flex-col gap-1 p-2">
          <h1 className="font-semibold">
            Subtotal:<span>{totalAmount}</span>
          </h1>
          <p className="font-semibold text-sm">
            Taxes and shipping will calculate at checkout
          </p>
          <div className="w-full boxStart gap-3">
            <Link to='/foods' className="btn text-sm">Contunie Shopping</Link>
            <Link to='/checkout' className="btn text-sm">Proceed checkout</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;