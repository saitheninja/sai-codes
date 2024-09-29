<script lang="ts">
  import ArticleBase from "$lib/ArticleBase.svelte";
  import ArticleSectionHeading from "$lib/ArticleSectionHeading.svelte";

  const titleHeading = "Music Theory Notes";
  const titleSubheading = "Make sound good.";
  const datePublished = "2024-06-03";
  const dateUpdated = "2024-09-29";
</script>

<ArticleBase
  {titleHeading}
  {titleSubheading}
  {datePublished}
  {dateUpdated}
>
  <section class="space-y-4">
    <ArticleSectionHeading
      level={2}
      title="Scales"
    />

    <section class="space-y-4">
      <ArticleSectionHeading
        level={3}
        title="Diatonic Scales"
      />

      <div>
        <p>Each note letter is only used once in a scale.</p>
        <p>
          (This convention sometimes leads to notes being described with
          unexpected sharps and flats, e.g. C Minor Scale has a Bb instead of
          A.)
        </p>
      </div>

      <p>
        a diatonic scale is any heptatonic scale (scale with 7 notes per octave)
        that includes five whole steps and two half steps in each octave, in
        which the two half steps are separated from each other by either two or
        three whole steps. This pattern ensures that all the half steps are
        maximally separated from each other (i.e. separated by at least two
        whole steps).
      </p>

      <p>
        The seven pitches of any diatonic scale can also be obtained by using a
        chain of six perfect fifths.
      </p>

      <div>
        <p>
          if one of the two versions is a perfect interval, the other is called
          either diminished (i.e. narrowed by one semitone) or augmented (i.e.
          widened by one semitone).
        </p>
        <p>
          Otherwise, the larger version is called major, the smaller one minor.
        </p>
      </div>

      <div>
        <p>
          Within a diatonic scale, unisons and octaves are always qualified as
          perfect,
        </p>
        <p>fourths as either perfect or augmented,</p>
        <p>fifths as perfect or diminished,</p>
        <p>
          and all the other intervals (seconds, thirds, sixths, sevenths) as
          major or minor.
        </p>
      </div>

      <section class="space-y-4">
        <ArticleSectionHeading
          level={4}
          title="Major Scale"
        />

        <p>Also known as the Ionian Mode.</p>

        <pre>
(whole step or half step)
(semitone steps)
(total semitones)
(scale degree, b or # relative to major)
(note letter)
(scale names, mode name)

 --W--W-H--W--W--W-H
 --2--2-1--2--2--2-1
0--2--4-5--7--9--11-12
1--2--3-4--5--6--7-1
C--D--E-F--G--A--B-C
C Major, Ionian Mode</pre>

        <p>
          C Major (and its relative minor scale, A Minor) doesn't have any
          sharps or flats.
        </p>
      </section>

      <section class="space-y-4">
        <ArticleSectionHeading
          level={4}
          title="Minor Scales"
        />

        <div>
          <p>There are 3 types of minor scale:</p>

          <ul class="list-disc pl-6">
            <li>natural</li>
            <li>harmonic</li>
            <li>melodic</li>
          </ul>
        </div>

        <section class="space-y-2">
          <ArticleSectionHeading
            level={5}
            title="Natural Minor Scale"
          />

          <p>
            The default minor scale. Assume this minor scale if the type of
            minor scale is not specified.
          </p>

          <pre>
 --W-H --W--W-H --W --W
 --2-1 --2--2-1 --2 --2
0--2-3 --5--7-8 --10--12
1--2-b3--4--5-b6--b7--1
C--D-Eb--F--G-Ab--Bb--C
C Natural Minor, C Minor, Aeolian Mode</pre>
        </section>

        <section class="space-y-2">
          <ArticleSectionHeading
            level={5}
            title="Harmonic Minor Scale"
          />

          <p>
            The seventh scale degree is raised by a half step (back to how it
            was in the Major Scale, because that interval sounds good).
          </p>

          <pre>
 --W-H --W--W-H ---WH-H
 --2-1 --2--2-1 ---3 -1
0--2-3 --5--7-8 ---11-12
1--2-b3--4--5-b6---7 -1
C--D-Eb--F--G-Ab---B -C
C Harmonic Minor</pre>
        </section>

        <section class="space-y-2">
          <ArticleSectionHeading
            level={5}
            title="Melodic Minor Scale"
          />

          <p>Descending: identical to natural minor.</p>

          <p>
            Ascending: raised sixth and seventh scale degrees (so that there
            isn't a 3 semitone jump).
          </p>

          <pre>
 --W-H --W--W--W--W-H
 --2-1 --2--2--2--2-1
0--2-3 --5--7--9--11-12
1--2-b3--4--5--6--7-1
C--D-Eb--F--G--A--B-C
C Melodic Minor</pre>
        </section>

        <div>
          <p>They share the flat third scale degree (b3).</p>

          <p>Major -> Natural Minor</p>
          <p>1 2 b3 4 5 b6 b7 1</p>

          <p>Major -> Harmonic Minor</p>
          <p>1 2 b3 4 5 b6 7 1</p>

          <p>Major -> Melodic Minor</p>
          <p>1 2 b3 4 5 6 7 1</p>
        </div>

        <div>
          <p>A Major to A Minor is the parallel minor.</p>
          <p>C Major to A Minor is the relative minor.</p>

          <p>C Major</p>
          <p>C D E F G A B C</p>

          <p>C Minor</p>
          <p>C D Eb F G Ab Bb C</p>

          <p>A Major</p>
          <p>A B C# D E F# G# A</p>

          <p>A Minor (same notes as C Major)</p>
          <p>A B C D E F G A</p>
        </div>

        <div>
          <p>Relative minor starts from the 6th note of the major scale.</p>
          <p>Or, relative major starts from the 3rd note of the minor scale.</p>
          <p>
            In other words, the relative minor is 3 semitones below, or 9
            semitones above, the major.
          </p>

          <p>relative minor is a natural minor scale.</p>
          <p>
            Natural minor scales share a key signature with a relative major
            key.
          </p>

          <p>
            The primary difference between major scales and minor scales is the
            third scale degree. A major scale always has a natural third (or
            major third). A minor scale never has a major third.
          </p>
          <p>
            In practice, you can add any note as a tension to a minor scale
            except for a major third.
          </p>
          <p>
            For example, if you are playing a D minor scale, almost any note can
            arguably sound good in this scale except for F♯. If you play an F♯,
            the scale instantly takes on a major tonality.
          </p>
        </div>
      </section>
    </section>

    <section class="space-y-4">
      <ArticleSectionHeading
        level={3}
        title="Other Scales"
      />

      <section class="space-y-2">
        <ArticleSectionHeading
          level={4}
          title="Chromatic Scale"
        />

        <p>All possible notes.</p>
        <p>12 notes, then repeat.</p>

        <pre>
-H-H-H-...-H- (whole step or half step)
1-2-3-...-12-1 (note number)
0-1-2-...-12-13 (total semitones)
C, C#, D, D#, E, F, F#, G, G#, A, A#, B, C
(note name, from C for piano)
E, F, F#, G, G#, A, A#, B, C, C#, D, D#, E
(note name, from E for guitar)</pre>
      </section>

      <section class="space-y-2">
        <ArticleSectionHeading
          level={4}
          title="Pentatonic Scale"
        />

        <p>
          5 notes. Remove the notes that are only a semitone away, so that none
          of the notes clash and you can play them in any order.
        </p>

        <div>
          <p>Major -> Pentatonic</p>
          <p>1 2 3 5 6 (1)</p>
        </div>

        <div>
          <p>Major -> Minor Pentatonic</p>
          <p>1 b3 4 5 b7 (1)</p>
        </div>
      </section>

      <section class="space-y-2">
        <ArticleSectionHeading
          level={4}
          title="Blues Scale"
        />

        <p>Minor Pentatonic + b5.</p>

        <div>
          <p>Major -> Blues</p>
          <p>1 b3 4 b5 6 b7 (1)</p>
        </div>
      </section>
    </section>

    <section class="space-y-4">
      <ArticleSectionHeading
        level={3}
        title="Scale Degrees"
      />

      <p>Scale degree: the position of a note relative to the tonic.</p>

      <pre>I  ii  iii  IV  V  vi  vii° I</pre>

      <div>
        <p>Uppercase: major</p>
        <p>Lowercase: minor</p>
        <p>Lowercase°: diminished</p>
        <p>Uppercase+: augmented</p>
      </div>

      <div>
        <p>I: major</p>
        <p>ii: minor</p>
        <p>iii: minor</p>
        <p>IV: major</p>
        <p>V: major</p>
        <p>vi: minor</p>
        <p>vii° (a.k.a. vii_b5): diminished (a.k.a. minor b5)</p>
        <p>I: major</p>
      </div>

      <div>
        <p>
          The eight degrees of the scale are also known by traditional names:
        </p>
        <p>1st: Tonic (key note)</p>
        <p>2nd: Supertonic</p>
        <p>3rd: Mediant</p>
        <p>4th: Subdominant</p>
        <p>5th: Dominant</p>
        <p>6th: Submediant</p>
        <p>7th: Leading Note/Tone OR Subtonic</p>
        <p>8th: Tonic (octave)</p>
      </div>

      <p>
        "subtonic" is used when the interval between it and the tonic in the
        upper octave is a whole step (i.e. natural minor scale).
      </p>

      <p>
        "leading note" is used when that interval is a half-step (i.e. major
        scale).
      </p>

      <pre>
                      Tonic
      (-2nd) Subtonic --|-- (+2nd) Supertonic
   (-3rd) Submediant ---|--- (+3rd) Mediant
(-5th) Subdominant -----|----- (+5th) Dominant</pre>
    </section>
  </section>

  <hr />

  <section class="space-y-4">
    <ArticleSectionHeading
      level={2}
      title="Modes"
    />

    <pre>
I--II--III-IV--V--VI--VII-I
 --W --W  -H --W--W --W  -H</pre>

    <div>
      <p>(starting note): (name of mode)</p>
      <p>I: Ionian (Major scale)</p>
      <p>ii: Dorian</p>
      <p>iii: Phrygian</p>
      <p>IV: Lydian</p>
      <p>V: Mixolydian</p>
      <p>vi: Aeolian (Natural Minor scale)</p>
      <p>vii: Locrian</p>
    </div>

    <p>mode: which note to start from in the loop.</p>
  </section>

  <hr />

  <section class="space-y-4">
    <ArticleSectionHeading
      level={2}
      title="Chords"
    />

    <section class="space-y-4">
      <ArticleSectionHeading
        level={3}
        title="Building Chords"
      />

      <section class="space-y-2">
        <ArticleSectionHeading
          level={4}
          title="Major Chord"
        />

        <pre>
1, 3, 5 (scale degree of major scale)
 -4-3- (steps in semitones)
0, 4, 7 (total semitones)</pre>
      </section>

      <section class="space-y-2">
        <ArticleSectionHeading
          level={4}
          title="Minor Chord"
        />

        <pre>
1, b3, 5
 -3-4-
0, 3, 7</pre>
      </section>

      <section class="space-y-2">
        <ArticleSectionHeading
          level={4}
          title="Augmented Chord"
        />

        <pre>
1, 3, 5#
 -4-4-
0, 4, 8</pre>
      </section>

      <section class="space-y-2">
        <ArticleSectionHeading
          level={4}
          title="Diminished Chord"
        />

        <pre>
1, b3, b5
 -3-3-
0, 3, 6</pre>
      </section>

      <section class="space-y-2">
        <ArticleSectionHeading
          level={4}
          title="Dominant Seventh Chord"
        />

        <pre>
1, 3, 5, b7
 -4-3-3-
0, 4, 7, 10</pre>
      </section>

      <section class="space-y-2">
        <ArticleSectionHeading
          level={4}
          title="Suspended 2nd Chord"
        />

        <pre>
1, 2, 5
 -2-5-
0, 2, 7</pre>
      </section>

      <section class="space-y-2">
        <ArticleSectionHeading
          level={4}
          title="Sus 4 Chord"
        />

        <pre>
1, 4, 5
 -5-2-
0, 5, 7</pre>
      </section>

      <section class="space-y-2">
        <ArticleSectionHeading
          level={4}
          title="Major 7 Sus 2 Chord"
        />

        <pre>
1, 2, 5, 7
 -2-5-2-
0, 2, 7, 11</pre>

        <p>(Dmaj7sus2 sounds good)</p>
      </section>
    </section>

    <section class="space-y-4">
      <ArticleSectionHeading
        level={3}
        title="Chord Progressions"
      />

      <p>These are some common chord progressions.</p>

      <pre>
I-V-vi-IV (scale degree)
0 7 9  5 (total semitones)</pre>

      <pre>
I-IV-V-IV
0 5  7 5</pre>

      <pre>
ii-V-I
2  7 0</pre>

      <pre>
I-vi-IV-V
0 9  5  7</pre>

      <pre>
I-bVII-I
0 10   0</pre>

      <section class="space-y-2">
        <ArticleSectionHeading
          level={4}
          title="12 Bar Blues"
        />

        <pre>
I-I-I-I
0 0 0 0

IV-IV-I-I
5  5  0 0

V-IV-I-I
7 5  0 0</pre>
      </section>

      <section class="space-y-2">
        <ArticleSectionHeading
          level={4}
          title="Canon"
        />

        <pre>
I-V-vi-iii
0 7 9  4

IV-I-IV-V
5  0 5  7</pre>
      </section>

      <section class="space-y-2">
        <ArticleSectionHeading
          level={4}
          title="Royal Road"
        />

        <pre>
IV-V-iii-vi
5-0-5-7</pre>

        <div>
          <p>
            <a href="https://youtu.be/6aezSL_GvZA"
              >David Bennett Piano video about Royal Road progression.</a
            >
          </p>
          <p>Popular in Japanese music.</p>
          <p>Variations: all 7th chords.</p>
        </div>
      </section>
    </section>
  </section>

  <hr />

  <section class="space-y-4">
    <ArticleSectionHeading
      level={2}
      title="Guitar Notes Math"
    />

    <div>
      <p>E-A-D-G-B-E</p>
      <p>-5-5-5-4-5-</p>
      <p>0, 5, 10, 15, 19, 24 semitones total (i.e. 2 octaves)</p>
    </div>

    <div>
      <p>E, F, F#, G, G#, A - 5 semitones</p>
      <p>A, A#, B, C, C#, D - 5 semitones</p>
      <p>D, D#, E, F, F#, G - 5 semitones</p>
      <p>G, G#, A, A#, B - 4 semitones</p>
      <p>B, C, C#, D, D#, E - 5 semitones</p>
    </div>

    <p>E, F, F#, G, G#, A, A#, B, C, C#, D, D#, E</p>

    <div>
      <p>E Major Scale</p>
      <p>E, F#, G#, A, B, C#, D#, E</p>
    </div>

    <section class="space-y-4">
      <ArticleSectionHeading
        level={3}
        title="Make the C Major Scale"
      />

      <p>Barre on fret 1 for 1st and 2nd string.</p>

      <pre>
E A D G B E
       |--> one semitone up for 1st and 2nd string
E A D G C F</pre>

      <pre>
C  D E F  G A B (C Major scale)
2# 4 6 1# 3 5 2 (string number)</pre>
    </section>
  </section>
</ArticleBase>
