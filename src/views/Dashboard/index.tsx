'use client';

// import { useCallback, useEffect, useState } from 'react';
// import DataBar from './components/DataBar';
// import { ChartWrapper } from './components/ChartWrapper';
// import AreaGraph from '@/app/components/Graphs/AreaGraph/AreaGraph';
// import { mergeDocumentData } from '../../../utils/mergeDatasets';
// import { DocumentData } from '@/types/types';
// import Modal from '@/app/components/modal/modal';
// import { numberCatcher } from '../../../utils/numberCatcher';
// import { detectStructuralChanges } from '../../../utils/detectDocumentChnages';
// import Loading from '@/app/loading';

// const Dashboard = () => {
//   const [dashboardData, setDashboardData] = useState<DocumentData[]>([]);
//   const [showModal, setShowModal] = useState(false);
//   const [modalContent, setModalContent] = useState('');
//   const [isLoading, setLoading] = useState(false);
//   const [fileName, setFileName] = useState<string>('');

//   useEffect(() => {
//     localStorage.setItem('dashboardData', JSON.stringify(dashboardData));
//   }, [dashboardData]);

//   const handleNewData = useCallback(
//     (newData: DocumentData[]) => {
//       if (dashboardData.length === 0) {
//         setDashboardData(newData);
//       } else {
//         const updatedData = mergeDocumentData(dashboardData, newData);
//         const { changesDetected, added, removed } = detectStructuralChanges(dashboardData, newData);
//         if (changesDetected) {
//           let message = 'Data structure has changed.';
//           if (added.length) {
//             message += ` Added: ${added.join(', ')}.`;
//           }
//           if (removed.length) {
//             message += ` Removed: ${removed.join(', ')}.`;
//           }
//           setModalContent(message);
//           setShowModal(true);
//         }
//         setDashboardData(updatedData);
//       }
//     },
//     [dashboardData],
//   );

//   return (
//     <div className="relative flex h-full w-full flex-col items-center justify-center bg-white">
//       <Modal
//         title={'Data structure chnaged'}
//         visible={showModal}
//         onClose={() => setShowModal(false)}
//       >
//         <div>{modalContent}</div>
//       </Modal>

//       <div className="absolute top-0 w-full">
//         <DataBar getFileName={setFileName} isLoading={setLoading} getData={handleNewData} />
//       </div>
//       <div>
//         <div className="flex w-[95%] justify-center">
//           {isLoading ? (
//             <div className="relative flex w-full items-center justify-center">
//               <Loading />
//               <div className="absolute top-[47vh] text-[18px]">{fileName}</div>
//             </div>
//           ) : (
//             <div className="z-20 mt-[140px] grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
//               {dashboardData &&
//                 dashboardData.map((document) => (
//                   <div>
//                     {Object.entries(document).map(([category, entries], index) => (
//                       <ChartWrapper
//                         key={index}
//                         title={numberCatcher(category)}
//                         className="min-h-[100px] min-w-[400px] space-y-4"
//                       >
//                         {Object.entries(entries).map(([index, items]) =>
//                           items.length > 1 ? (
//                             <div className="my-[20px] flex items-center">
//                               <AreaGraph key={index} data={items} />
//                             </div>
//                           ) : (
//                             <div className="h-full">
//                               {items.map((item, idx) => (
//                                 <div
//                                   className="flex h-[100px] min-w-[300px] items-center justify-between gap-[20px]"
//                                   key={idx}
//                                 >
//                                   <h1 className="text-[17px] font-bold">{item.title}:</h1>
//                                   <div className="min-w-[70px] rounded-md bg-primary-90 p-4 text-center">
//                                     <h1 className="text-[20px] text-shades-white">{item.value}</h1>
//                                   </div>
//                                 </div>
//                               ))}
//                             </div>
//                           ),
//                         )}
//                       </ChartWrapper>
//                     ))}
//                   </div>
//                 ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// Dashboard.tsx
import React, { useCallback, useEffect, useState } from 'react';
import DataBar from './components/DataBar';
import { ChartWrapper } from './components/ChartWrapper';
import AreaGraph from '@/app/components/Graphs/AreaGraph/AreaGraph';

import { DocumentData } from '@/types/types';
import Modal from '@/app/components/modal/modal';
import { numberCatcher } from '../../../utils/numberCatcher';
import Loading from '@/app/loading';
import { mergeDocumentData } from '../../../utils/mergeDatasets';
import { detectStructuralChanges } from '../../../utils/detectDocumentChnages';

interface ModalContent {
  added: string[];
  removed: string[];
}

const Dashboard: React.FC = () => {
  const [dashboardData, setDashboardData] = useState<DocumentData[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ModalContent>({ added: [], removed: [] });
  const [isLoading, setLoading] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>('');

  useEffect(() => {
    localStorage.setItem('dashboardData', JSON.stringify(dashboardData));
  }, [dashboardData]);

  const handleNewData = useCallback(
    (newData: DocumentData[]) => {
      if (dashboardData.length === 0) {
        setDashboardData(newData);
      } else {
        const updatedData = mergeDocumentData(dashboardData, newData);
        const { changesDetected, added, removed } = detectStructuralChanges(dashboardData, newData);
        if (changesDetected) {
          setShowModal(true);
          setModalContent({ added, removed });
        }
        setDashboardData(updatedData);
      }
    },
    [dashboardData],
  );

  const handleUpdateData = (category: string, action: 'add' | 'remove'): void => {
    setShowModal(false); // Close modal after update
  };

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center bg-white">
      <Modal title="Data structure changed" visible={showModal} onClose={() => setShowModal(false)}>
        {modalContent.added.length > 0 && (
          <div>
            <h3>Added:</h3>
            {modalContent.added.map((category) => (
              <div key={category}>
                {category} <button onClick={() => handleUpdateData(category, 'add')}>Add</button>
              </div>
            ))}
          </div>
        )}
        {modalContent.removed.length > 0 && (
          <div>
            <h3>Removed:</h3>
            {modalContent.removed.map((category) => (
              <div key={category}>
                {category}{' '}
                <button onClick={() => handleUpdateData(category, 'remove')}>Remove</button>
              </div>
            ))}
          </div>
        )}
      </Modal>

      <div className="absolute top-0 w-full">
        <DataBar getFileName={setFileName} isLoading={setLoading} getData={handleNewData} />
      </div>
      <div className="flex w-[95%] justify-center">
        {isLoading ? (
          <div className="relative flex w-full items-center justify-center">
            <Loading />
            <div className="absolute top-[47vh] text-[18px]">{fileName} is loading...</div>
          </div>
        ) : (
          <div className="z-20 mt-[140px] grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dashboardData.map((document, docIndex) => (
              <div key={docIndex}>
                {Object.entries(document).map(([category, entries], index) => (
                  <ChartWrapper
                    key={index}
                    title={numberCatcher(category)}
                    className="min-h-[100px] min-w-[400px] space-y-4"
                  >
                    {Object.entries(entries).map(([index, items]) => (
                      <div className="my-[20px] flex items-center" key={index}>
                        {items.length > 1 ? (
                          <AreaGraph key={index} data={items} />
                        ) : (
                          items.map((item, idx) => (
                            <div
                              className="flex h-[100px] min-w-[300px] items-center justify-between gap-[20px]"
                              key={idx}
                            >
                              <h1 className="text-[17px] font-bold">{item.title}:</h1>
                              <div className="min-w-[70px] rounded-md bg-primary-90 p-4 text-center">
                                <h1 className="text-[20px] text-shades-white">{item.value}</h1>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    ))}
                  </ChartWrapper>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
