function PlayerName() {
 
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-500 to-indigo-600 px-4">
      <form
       
        className="bg-white p-8 rounded-2xl shadow-lg space-y-6 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Entrer les noms des joueurs</h2>

        <input
          name="player1"
          type="text"
          placeholder="Nom du Joueur 1"
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <input
          name="player2"
          type="text"
          placeholder="Nom du Joueur 2"
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition"
        >
          Lancer le jeu
        </button>
      </form>
    </main>
)};
export default PlayerName;