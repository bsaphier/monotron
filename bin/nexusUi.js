/* globals nx keyboard1 */

export default nx.onLoad = function () {

  keyboard1.on('*', data => console.log(data));

};
