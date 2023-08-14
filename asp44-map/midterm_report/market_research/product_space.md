\newpage
## Exploring the product space
All the methods previously used to analyse the market highlight a gap in the market space.

![Venn diagram showing Meet&Run position in the market space](./img/vennMarketPosition.png)

The outcome of this analysis gives a situation very similar to a scenario described by the Blue Ocean strategy. [@kimBlueOceanStrategy2015]
The analysis is pushed further, integrating basic principles of the Blue Ocean strategy to reinforce and refine the product position on the market.
A framework named ERRC grid (similar to the SWOT analysis) is applied to the product and gives the following outcomes :

- Eliminate high pricing and eliminate the ability for users to create custom paths or choose their own locations
- Reduce the tracking tools, which are performance-oriented, and the detailed user profiles
- Raise engagement through gamification and raise the ability to meet new people
- Create a map to visualize where other users plan to run and develop a time slot booking system

\newpage
The following strategy canvas gives a more precise visualization of Meet&Run against three other existing applications :

<!-- GRAPH -->
\begin{figure}
    \centering
    \begin{tikzpicture}
    \begin{axis}[
        xticklabel style={rotate=40, anchor=near xticklabel},
        ylabel={Offering level},
        width=12cm,
        height=9cm,
        symbolic x coords={tracking, safety, entertainment, price, social interaction, health},
        symbolic x coords={price, custom paths, profile, tracking, game engagement, meet people, visualize runners, book time slots},
        xtick=data,
        ymin=0, ymax=5,
        grid=both,
        legend style={at={(1.15,0.0)},anchor=north}
        %xlabel style={yshift=-15pt}
    ]

    \addplot[color=orange, line width=1.0pt, mark=square*, mark options={scale=1.0, fill=orange}] coordinates {
        (price, 5)
        (custom paths, 5)
        (profile, 5)
        (tracking, 5)
        (game engagement, 2)
        (meet people, 1)
        (visualize runners, 0)
        (book time slots, 0)
    };
    \addlegendentry{Strava}

    \addplot[color=purple, line width=1.0pt, mark=square*, mark options={scale=1.0, fill=purple}] coordinates {
        (price, 1)
        (custom paths, 4)
        (profile, 4)
        (tracking, 3)
        (game engagement, 4)
        (meet people, 0)
        (visualize runners, 0)
        (book time slots, 0)
    };
    \addlegendentry{Munzee}

    \addplot[color=blue, line width=1.0pt, mark=square*, mark options={scale=1.0, fill=blue}] coordinates {
        (price, 1)
        (custom paths, 3)
        (profile, 3)
        (tracking, 2)
        (game engagement, 1)
        (meet people, 4)
        (visualize runners, 0)
        (book time slots, 0)
    };
    \addlegendentry{Knockk}

    \addplot[color=black, line width=2pt, mark=*, mark options={scale=1.5, fill=black}] coordinates {
        (price, 0)
        (custom paths, 0)
        (profile, 1)
        (tracking, 2)
        (game engagement, 4)
        (meet people, 5)
        (visualize runners, 5)
        (book time slots, 5)
    };
    \addlegendentry{Meet\&Run}

    \end{axis}
    \end{tikzpicture}
    \caption{Strategy canva positioning Meet\&Run against competitors}
\end{figure}
<!--  -->

Each application has been evaluated by team members using a Likert scale from 0 to 5 for each feature.
The graph shows a rounded mean of all notes per feature.