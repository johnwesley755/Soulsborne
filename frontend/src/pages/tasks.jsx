import React from 'react';

const TasksPage = () => {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Your Tasks</h1>
      <div style={styles.tasksContainer}>
        {/* Task 1 */}
        <div style={styles.taskCircle}>
          <div style={styles.taskContent}>
            <img 
              src="https://via.placeholder.com/80" // Replace with actual image/SVG
              alt="Task 1"
              style={styles.taskImage}
            />
            <h2>Task 1</h2>
            <p>Complete this task</p>
            <div style={styles.progressContainer}>
              <h4>Progress</h4>
              <div style={styles.progressBar}>
                <div style={{ ...styles.progressBarFill, width: '40%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Task 2 */}
        <div style={styles.taskCircle}>
          <div style={styles.taskContent}>
            <img 
              src="https://via.placeholder.com/80" // Replace with actual image/SVG
              alt="Task 2"
              style={styles.taskImage}
            />
            <h2>Task 2</h2>
            <p>Work on this</p>
            <div style={styles.progressContainer}>
              <h4>Progress</h4>
              <div style={styles.progressBar}>
                <div style={{ ...styles.progressBarFill, width: '70%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Task 3 */}
        <div style={styles.taskCircle}>
          <div style={styles.taskContent}>
            <img 
              src="https://via.placeholder.com/80" // Replace with actual image/SVG
              alt="Task 3"
              style={styles.taskImage}
            />
            <h2>Task 3</h2>
            <p>Finish this task</p>
            <div style={styles.progressContainer}>
              <h4>Progress</h4>
              <div style={styles.progressBar}>
                <div style={{ ...styles.progressBarFill, width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Daily streak count */}
      <div style={styles.streakContainer}>
        <h3>Daily Streak: 5 days</h3>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  page: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'white',
    padding: '20px',
    color: '#6a0dad', // Violet theme
    minHeight: '100vh', // Full page height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  tasksContainer: {
    display: 'flex',
    justifyContent: 'space-between', // Distributes tasks across the width
    width: '100%',
    padding: '0 50px', // Adds space on the sides
    boxSizing: 'border-box',
  },
  taskCircle: {
    flexGrow: 1, // Each task takes equal space
    maxWidth: '30%', // Limits the width of each task to 30% of the container
    margin: '0 10px', // Small margin between tasks
    height: '300px',
    borderRadius: '50%',
    backgroundColor: '#eee',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    background: 'linear-gradient(145deg, #f0f0ff, #f9f9ff)', // white to violet gradient
    padding: '10px',
  },
  taskContent: {
    textAlign: 'center',
    color: '#6a0dad', // Violet theme
  },
  taskImage: {
    width: '80px',
    height: '80px',
    marginBottom: '10px',
  },
  progressContainer: {
    marginTop: '10px',
    width: '100%',
  },
  progressBar: {
    width: '80%', // Reduced to fit inside the task circle
    backgroundColor: '#f0f0ff',
    height: '15px',
    borderRadius: '10px',
    margin: '5px auto',
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#6a0dad', // Violet
    borderRadius: '10px 0 0 10px',
    transition: 'width 0.4s ease',
  },
  streakContainer: {
    marginTop: '40px',
  },
};

export default TasksPage;
