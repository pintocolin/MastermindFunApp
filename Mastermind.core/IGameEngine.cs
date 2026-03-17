namespace Mastermind.Core
{
    public interface IGameEngine
    {
        string GenerateHint(string secretCode, string guess);
        bool IsValidGuess(string guess);
    }
}