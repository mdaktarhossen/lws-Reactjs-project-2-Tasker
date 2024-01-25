/* eslint-disable react/prop-types */

export default function TastLists() {
  return (
    <div className="overflow-auto">
      <table className="table-fixed overflow-auto xl:w-full">
        <thead>
          <tr>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]"> Title </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-full"> Description </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]"> Tags </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Priority </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Options </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
            <td>Fav</td>
            <td> Hi akter</td>
            <td>
              <div>Hi akter</div>
            </td>
            <td>
              <ul className="flex justify-center gap-1.5 flex-wrap">
                <li>
                  <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                    react, node
                  </span>
                </li>
              </ul>
            </td>
            <td className="text-center">High</td>
            <td>
              <div className="flex items-center justify-center space-x-3">
                <button className="text-red-500">Delete</button>
                <button className="text-blue-500">Edit</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
