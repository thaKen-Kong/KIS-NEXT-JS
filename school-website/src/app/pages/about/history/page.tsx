import { MultipleBoxContainer, PageContainer, WhiteContainer } from "@/components/Container";
import { Label } from "@/components/items/Label";
import { PageIntroHeader } from "@/components/ui/PagesIntroHeader";


export default function History() {

    const history = [
        {title : "Cavite Highland Institute Founded", info :  "Cavite Highland Institute came to birth on 1,200 sq. m. land donated by Eufemio V. Penano. Established through the efforts of visionary leaders: Ciriano Acuna, Lonesto Alcazar, and Alfredo Dimapilis.", year : "1962", highlight : "School Founding"},
        {title : "Early Years", info :  "Started as a private institution with only two teachers. Later renamed to Kaytitinga Academy under Mrs. Caridad Alvarez's supervision.", year : "  1960s", highlight : "Private Institution"},
        {title : "Kaytitinga Barrio High School", info :  "School became a public high school. Miss Josefina De Guzman served as school head with Mrs. Mauricia R. Rolle as Head Teacher.", year : "1971", highlight : "Public School Status"},
        {
    year: "1974-1975",
    title: "Institutional Growth",
    info: "Renamed to Kaytitinga Barangay High School under Mr. Jose P. Varias. Remarkable improvements: new classrooms and additional teachers hired.",
    highlight: "Expansion Phase"
  },
  {
    year: "1978",
    title: "Leadership Era of Mrs. Rolle",
    info: "Mrs. Mauricia R. Rolle promoted to Principal. Her dedication contributed significantly to school development over many years.",
    highlight: "Dedicated Leadership"
  },
  {
    year: "1993",
    title: "Kaytitinga National High School",
    info: "School renamed in consonance with DECS aim for greater educational heights. New school buildings constructed, enrollment and teacher count increased.",
    highlight: "National Status"
  },
  {
    year: "1995-2005",
    title: "Community-Driven Development",
    info: "Teachers organized fundraising projects: concerts, drama festivals, and contests. Acquired modern equipment and built new facilities - Annex Building (1995) and Maliksi Building (2005).",
    highlight: "Infrastructure Growth"
  },
  {
    year: "2020-2021",
    title: "COVID-19 Pandemic Response",
    info: "Modular distance learning implemented as the primary learning delivery mode during the pandemic.",
    highlight: "Crisis Adaptation"
  },
  {
    year: "2022-2023",
    title: "Blended Learning Phase",
    info: "Transition to blended learning combining limited face-to-face and modular distance learning.",
    highlight: "Hybrid Learning"
  },
  {
    year: "2023-2024",
    title: "Full Face-to-Face Resumption",
    info: "Normal learning delivery implemented with full face-to-face instruction. Dr. Leoniza D. Varias, former teacher, appointed as new school head in March 2024.",
    highlight: "Return to Normal"
  }
    ]

    return (
        <>
            <PageContainer custom="gap-2">
                <PageIntroHeader headerText="HISTORY"/>
                <WhiteContainer custom="flex-col border-y-5 border-emerald-900 rounded-lg p-2   ">
                    <MultipleBoxContainer data={history}/>
                </WhiteContainer>
            </PageContainer>
        </>
    )
}