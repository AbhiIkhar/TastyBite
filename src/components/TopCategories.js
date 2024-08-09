// const TopCategories = ({ topCategories }) => {
//   console.log(topCategories);

//   const [showIndex, setShowIndex] = useState(null);

//   return (
//     <>
//       {topCategories?.map((obj, index) => {
//         // controlled component
//         console.log(obj.card.card.title);
//         return (
//           <Category
//             key={obj.card.card.title}
//             resObj={obj}
//             toggle={index === showIndex ? true : false}
//             setShowIndex={() => setShowIndex(index)}
//             setNullIndex={() => setShowIndex(null)}
//           />
//         );
//       })}
//     </>
//   );
// };

// export default TopCategories;
