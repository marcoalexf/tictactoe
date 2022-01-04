using System;
using System.Collections.Generic;
using System.Linq;
 
namespace Bomba
{
    public class Program
    {
		public enum COLORS {
			BRANCO,
			VERMELHO,
			VERDE,
			ROXO,
			LARANJA,
			PRETO
		}
		
        public static void Main(string[] args)
        {
			// Setup lookup table, could be a function on its own or a class that has a solve() method.
			// its just a console app, will not over engineer
			var lookupTable = new Dictionary<string, COLORS[]>();
			lookupTable.Add("BRANCO", new COLORS[] {COLORS.VERDE, COLORS.VERMELHO, COLORS.ROXO, COLORS.LARANJA});
			lookupTable.Add("PRETO", new COLORS[] {COLORS.PRETO, COLORS.ROXO});
			lookupTable.Add("VERMELHO", new COLORS[] {COLORS.VERDE});
			lookupTable.Add("VERDE", new COLORS[] {COLORS.BRANCO, COLORS.LARANJA});
			lookupTable.Add("LARANJA", new COLORS[] {COLORS.VERMELHO, COLORS.PRETO});
			lookupTable.Add("ROXO", new COLORS[] {COLORS.BRANCO, COLORS.PRETO, COLORS.VERMELHO});
			
			var input = "Branco, Laranja, Verde";
			var parsedInput = input.Split(',').Select(x => x.ToUpper().Trim());
			Console.WriteLine(analyseInput(parsedInput, lookupTable));
        }
		
		public static String analyseInput(IEnumerable<string> input, Dictionary<string, COLORS[]> lookupTable)
		{
			var result = "Bomba Desarmada";
			for(var x = 0; x < input.Count() - 1; x++)
			{
				var current = input.ElementAt(x);
				var next = input.ElementAt(x + 1);
				var values = new COLORS[]{};
				lookupTable.TryGetValue(current, out values);
				if (!values.Select(color => color.ToString()).Contains(next)) 
				{
					result = "Bomba Explodiu";
					break;
				}
			}
			return result;
		}
    }
}