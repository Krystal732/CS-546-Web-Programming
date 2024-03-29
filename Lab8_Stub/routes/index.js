//Here you will import route files and export them as used in previous labs
import charactersRoutes from './characters.js';

const constructorMethod = (app) => {
  app.use('/', charactersRoutes);
  app.use('*', (req, res) => {
    return res.status(404).json({error: 'Not found'});
  });
};
export default constructorMethod;
