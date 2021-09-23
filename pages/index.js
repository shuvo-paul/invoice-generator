import Head from 'next/head'
import InputField from 'partials/form/InputField';
import DateField from 'partials/form/DateField';
import CompanyInfo from 'partials/CompanyInfo';
import ItemList from 'partials/ItemList';

export default function Home() {
  return (
    <div className="bg-gray-100 pt-6 pb-6">
      <Head>
        <title>Invoice App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-6 max-w-5xl mx-auto bg-white rounded py-6">
        <div className="text-center text-4xl mb-10">
          Invoice
        </div>

        <div className="flex justify-between mb-8">
          <div className="max-w-xs">
            <label className="border border-dashed border-warm-gray-400 rounded text-center py-4 px-6 block bg-gray-50">
              Logo
              <input type="file" className="hidden" />
            </label>
            {/* TODO: logo option text/image */}
          </div>
          <div className="flex-shrink">
            <div className="flex items-center mb-4">
              <div className="w-[100px] mr-4">
                Invoice No:
              </div>
              <div className="w-[200px]">
                <InputField placeholder="00001" />
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-[100px] mr-4">
                Invoice Date:
              </div>
              <div className="w-[200px]">
                <DateField/>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-[100px] mr-4">
                Due Date:
              </div>
              <div className="w-[200px]">
                <DateField/>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-8">
          <CompanyInfo title="Billed By" />
          <CompanyInfo title="Billed To" />
        </div>

        <div className="mt-8">
          <ItemList/>
        </div>
      </main>
    </div>
  )
}
