import Board from './components/Board/Board'

const App = () => {
  const data = {
    currentTasks: [
      {
        title: 'Evaluate the addition and deletion of user IDs.',
        date: new Date(2021, 8, 20),
        status: 'pending',
        importance: 'minor'
      },
  
      {
        title: 'Identify the implementation team.',
        date: new Date(2021, 8, 22),
        status: 'pending',
        importance: 'minor'
      },

      {
        title: 'Identify the implementation team.',
        date: new Date(2021, 8, 22),
        status: 'pending',
        importance: 'minor'
      },

      {
        title: 'Identify the implementation team.',
        date: new Date(2021, 8, 22),
        status: 'pending',
        importance: 'minor'
      },

      {
        title: 'Identify the implementation team.',
        date: new Date(2021, 8, 22),
        status: 'pending',
        importance: 'minor'
      },

      {
        title: 'Identify the implementation team.',
        date: new Date(2021, 8, 22),
        status: 'pending',
        importance: 'minor'
      },

      {
        title: 'Identify the implementation team.',
        date: new Date(2021, 8, 22),
        status: 'pending',
        importance: 'minor'
      },

      {
        title: 'Identify the implementation team.',
        date: new Date(2021, 8, 22),
        status: 'pending',
        importance: 'minor'
      },

      {
        title: 'Identify the implementation team.',
        date: new Date(2021, 8, 22),
        status: 'pending',
        importance: 'minor'
      },

      {
        title: 'Identify the implementation team.',
        date: new Date(2021, 8, 22),
        status: 'pending',
        importance: 'minor'
      }
    ],

    completedTasks: []
  }

  return <Board curTasks={data.currentTasks} />
};

export default App;
